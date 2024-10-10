// pages/redirect.tsx
import { GetServerSideProps } from 'next';
import config from './../../config.json'
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();
  const { fileName } = router.query; // Get the file name from the query parameter

  useEffect(() => {
    const fetchPdfUrl = async () => {

        try {
          // Replace 'YOUR_GOOGLE_APPS_SCRIPT_URL' with your actual URL
          const response = await axios.get(`https://script.google.com/macros/s/AKfycbxukMoLEx8crjqZaGP8fiVjqyUhLIk6_TiMQX0jG9_V0mjauT8U4goxnbGSKvj3ws5e/exec?fileName=MasterShort.docx.pdf`);
          const pdfUrl = response.data; // This should be the URL of the PDF file

          if (pdfUrl && typeof pdfUrl === 'string') {
            // Redirect to the PDF URL
            window.location.href = pdfUrl;
          } else {
            console.error('PDF URL not found or invalid');
          }
        } catch (error) {
          console.error('Error fetching PDF URL:', error);
        }

    };

    fetchPdfUrl();
  }, [fileName]);

  return <div>Redirecting...</div>;
};

export default RedirectPage;

//docs mera baap banayega