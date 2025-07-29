import axios from 'axios';
import React,{useState} from 'react';



type tambahProps = {
  setShowForm: (show: boolean) => void;
  getProyek: () => void;
}


function Tambah({ setShowForm, getProyek }: tambahProps) {
  const [gambar, setGambar] = useState<File | null>(null);
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [tools, setTools] = useState<string[]>([]);
  const [status, setStatus] = useState("aktif");
  const [url_demo, setUrlDemo] = useState("");
  

  

  const handleCheckbox = (tool: string) => {
    if (tools.includes(tool)) {
      setTools(tools.filter(t => t !== tool));
    } else {
      setTools([...tools, tool]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try{
      const formData = new FormData();
      if (gambar) {
        formData.append("gambar", gambar);
      }
      formData.append("judul", judul);
      formData.append("deskripsi", deskripsi);
      formData.append("tools", JSON.stringify(tools));
      formData.append("status", status);
      formData.append("url_demo", url_demo);


      await axios.post('http://localhost:5000/proyeks', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      getProyek(); // memuat ulang data
      
      setShowForm(false); // menutup modal
      
    }catch (error) {
      console.error("Gagal menambahkan proyek:", error);
    }
  }


  


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        {/* Background hitam blur */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>

        {/* Modal Form */}
        <div className="relative bg-gray-900 text-white rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-scroll 
          animate__animated animate__zoomIn">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Tambah Proyek</h2>

          <form className="space-y-5" onSubmit={handleSubmit} >
            {/* Gambar */}
            <div>
              <label htmlFor="image" className="block mb-1 text-sm font-semibold text-white">
                Upload Gambar
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => setGambar(e.target.files ? e.target.files[0] : null)}
                className="w-full bg-gray-800 text-white p-2 rounded-lg border border-gray-600 file:mr-4 file:ml-1 file:py-1 file:px-3 
                  file:rounded file:border-0 file:bg-violet-700 file:text-white hover:file:bg-violet-600"
              />
            </div>

            {/* Judul */}
            <div>
              <label htmlFor="title" className="block mb-1 text-sm font-semibold text-white">
                Judul Website
              </label>
              <input
                type="text"
                id="title"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Contoh: Portofolio React"
                className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 placeholder:text-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            {/* Deskripsi */}
            <div>
              <label htmlFor="description" className="block mb-1 text-sm font-semibold text-white">
                Deskripsi
              </label>
              <textarea
                id="description"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                rows={4}
                placeholder="Tuliskan deskripsi..."
                className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 placeholder:text-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
            </div>

            {/* Jenis Kode */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-white">
                Tools
              </label>
              <div className="grid grid-cols-2 gap-2 text-white">
                {["HTML", "CSS", "Javascript", "React JS", "Node.js", "Express", "Laravel 10", "Typescript","Tailwind CSS","Vite","Bootsrap" ].map((tool) => (
                  <label key={tool} className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg border border-gray-700">
                    <input
                      type="checkbox"
                      value={tool}
                      className="accent-violet-600"
                      onChange={() => handleCheckbox(tool)} 
                    />
                    <span>{tool}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* status */}
            <div>
              <label htmlFor="status" className="block mb-1 text-sm font-semibold text-white">
                Status
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="aktif">Aktif</option>
                <option value="selesai">Selesai</option>
              </select>
            </div>

            {/* URL Demo */}
            <div>
              <label htmlFor="demoUrl" className="block mb-1 text-sm font-semibold text-white">
                URL Demo
              </label>
              <input
                type="url"
                id="demoUrl"
                value={url_demo}
                onChange={(e) => setUrlDemo(e.target.value)}
                placeholder="https://contoh-demo.com"
                className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 placeholder:text-gray-400 
                  focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
            </div>

            {/* Tombol Aksi */}
            <div className="flex justify-center gap-4 pt-4">
              <button
                type="submit"
                className="px-8 py-3 bg-violet-700 hover:bg-violet-600 text-white font-semibold rounded-lg transition"
                >
                Simpan
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-8 py-3 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-lg transition"
                >
                Batal
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Tambah