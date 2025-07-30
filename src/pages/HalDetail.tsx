import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../komponen/Navbar";
import Footer from "../komponen/Footer";


interface Proyek {
  id: number;
  gambar: string;
  judul: string;
  deskripsi: string;
  tools: string[];
  url_demo: string;
}

function HalDetail() {
  // const navigate = useNavigate();
  const [proyek, setProyek] = useState<Proyek | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { slug } = useParams<{ slug: string }>();
  

  useEffect(() => {
    const fetchProyek = async () => {
      try {
        const res = await axios.get<Proyek>(`http://localhost:5000/proyeks/slug/${slug}`);
        console.log("Data proyek:", res.data);
        setProyek(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Gagal mengambil detail proyek", err);
        setError("Gagal mengambil detail proyek.");
        setLoading(false);
      }
    };

    if (slug) {
        fetchProyek();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center mt-20 text-white">Loading...</div>
    );
  }

  if (error || !proyek) {
    return (
      <div className="text-center mt-20 text-red-500">
        {error || "Proyek tidak ditemukan."}
      </div>
    );
  }

  return (
    
   
      
    <div className="container mx-auto px-4 text-white">
      <Navbar />

      <div className="mt-20 grid md:grid-cols-2 gap-10 items-start">
        <img
          src={`http://localhost:5000/images/${proyek.gambar}`}
          alt={proyek.judul}
          className="w-full rounded-lg shadow-lg"
          loading="lazy"
        />


        

        <div>
          <h1 className="text-4xl font-bold mb-4">{proyek.judul}</h1>
          <p className="text-base opacity-70 mb-6 whitespace-pre-line">{proyek.deskripsi}</p>

          <h2 className="text-xl font-semibold mb-2">Tools yang digunakan:</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {proyek.tools && proyek.tools.length > 0 ? (
              proyek.tools.map((tool, idx) => (
                <span key={idx} className="bg-gray-700 px-3 py-1 rounded-md text-sm font-medium">
                  {tool}
                </span>
              ))
            ) : (
              <span className="text-gray-400">Tidak ada data tools</span>
            )}
          </div>

          <div className="flex gap-4">
            <a
              href={proyek.url_demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-700 px-5 py-3 rounded-md hover:bg-violet-600 transition"
            >
              Lihat Demo
            </a>
            {/* <button
              onClick={() => navigate(-1)}
              className="bg-gray-700 px-5 py-3 rounded-md hover:bg-gray-600 transition"
            >
              Kembali
            </button> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>

    
  );
}

export default HalDetail;
