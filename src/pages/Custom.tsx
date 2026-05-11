import React, { useState, useRef } from "react";
import { UploadCloud, CheckCircle2, File as FileIcon, X, AlertCircle, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

export default function Custom() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    description: "",
    material: "PLA",
    color: "Zwart",
    precision: "0.20mm",
    scale: "100%",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      validateAndSetFile(droppedFile);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (selectedFile: File) => {
    const validExtensions = ['.stl', '.obj', '.step', '.3mf'];
    const fileName = selectedFile.name.toLowerCase();
    const isValid = validExtensions.some(ext => fileName.endsWith(ext));
    
    if (isValid) {
      setFile(selectedFile);
    } else {
      alert("Ongeldig bestandsformaat. Upload a.u.b. een STL, OBJ, STEP, of 3MF bestand.");
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const data = new FormData();
      if (file) {
        data.append('file', file);
      }
      data.append('material', formData.material);
      data.append('color', formData.color);
      data.append('precision', formData.precision);
      data.append('scale', formData.scale);
      data.append('description', formData.description);

      const response = await fetch('/api/custom-request', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Er is een fout opgetreden bij het verzenden van je aanvraag. Probeer het later opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-24 text-center px-4 bg-brand-black w-full relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-md w-full bg-brand-anthracite/50 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl"
        >
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="font-display text-2xl font-bold text-white mb-2">Aanvraag Ontvangen!</h2>
          <p className="text-gray-400 mb-8">
            Bedankt voor je aanvraag. We hebben je bestand veilig ontvangen en gaan direct aan de slag met de prijsberekening. Je hoort binnen 24 uur van ons.
          </p>
          <Link to="/" className="inline-block w-full text-center bg-brand-blue text-brand-black px-6 py-3 font-bold uppercase tracking-widest text-sm rounded hover:scale-[1.02] transition-transform">
            Terug naar Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col py-12 md:py-24 bg-brand-black relative min-h-screen">
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter italic">Custom Print Aanvraag</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Upload je eigen 3D bestand en ontvang vrijblijvend een offerte binnen 24 uur. Geüploade bestanden worden vertrouwelijk behandeld.</p>
        </motion.div>

        <div className="bg-brand-anthracite/30 border border-white/10 rounded-2xl backdrop-blur-md overflow-hidden">
          <div className="flex border-b border-white/10">
            {[1, 2].map((s) => (
              <div 
                key={s} 
                className={`flex-1 py-4 text-center text-sm font-bold uppercase tracking-widest transition-colors ${step >= s ? 'text-brand-blue bg-white/5' : 'text-gray-500'}`}
              >
                Stap {s}: {s === 1 ? 'Bestand' : 'Details'}
              </div>
            ))}
          </div>

          <div className="p-6 md:p-10">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-bold text-white mb-6">1. Upload je 3D Model</h2>
                  
                  {!file ? (
                    <div 
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
                        isDragging ? "border-brand-blue bg-brand-blue/5" : "border-white/20 hover:border-brand-blue/50 hover:bg-white/5"
                      }`}
                    >
                      <UploadCloud className={`w-12 h-12 mb-4 ${isDragging ? "text-brand-blue animate-bounce" : "text-gray-400"}`} />
                      <p className="text-white font-medium mb-2">Sleep je 3D bestand hierheen</p>
                      <p className="text-gray-500 text-sm mb-6">of klik om te bladeren op je apparaat</p>
                      
                      <div className="flex gap-2 flex-wrap justify-center">
                        <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400 font-mono">.STL</span>
                        <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400 font-mono">.OBJ</span>
                        <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400 font-mono">.STEP</span>
                        <span className="px-2 py-1 bg-brand-blue/20 border border-brand-blue/50 rounded text-xs text-brand-blue font-mono font-bold">.3MF</span>
                      </div>
                      
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileInput} 
                        className="hidden" 
                        accept=".stl,.obj,.step,.3mf"
                      />
                    </div>
                  ) : (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-brand-blue/20 text-brand-blue rounded-xl flex items-center justify-center">
                          <FileIcon className="w-8 h-8" />
                        </div>
                        <div>
                          <p className="text-white font-medium text-lg">{file.name}</p>
                          <p className="text-gray-500 text-sm">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <button 
                        onClick={removeFile}
                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-500 flex items-center justify-center transition-colors"
                        title="Verwijder bestand"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  )}

                  <div className="mt-8 flex justify-end">
                    <button 
                      onClick={() => setStep(2)}
                      disabled={!file}
                      className="bg-brand-blue text-brand-black px-8 py-3 font-bold uppercase tracking-widest text-sm rounded hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
                    >
                      Volgende Stap <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={submitForm}>
                    <h2 className="text-xl font-bold text-white mb-6">2. Print Specificaties</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Materiaal</label>
                        <select 
                          className="w-full bg-brand-black border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none"
                          value={formData.material}
                          onChange={(e) => setFormData({...formData, material: e.target.value})}
                        >
                          <option value="PLA">PLA (Standaard, milieuvriendelijk)</option>
                          <option value="PETG">PETG (Sterk, waterbestendig)</option>
                          <option value="ABS">ABS (Zeer sterk, hittebestendig)</option>
                          <option value="TPU">TPU (Flexibel, rubberachtig)</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Gewenste Kleur</label>
                        <select 
                          className="w-full bg-brand-black border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none"
                          value={formData.color}
                          onChange={(e) => setFormData({...formData, color: e.target.value})}
                        >
                          <option value="Zwart">Zwart</option>
                          <option value="Wit">Wit</option>
                          <option value="Grijs">Grijs</option>
                          <option value="Rood">Rood</option>
                          <option value="Blauw">Blauw</option>
                          <option value="Groen">Groen</option>
                          <option value="Transparant">Transparant (Alleen PETG/Resin)</option>
                          <option value="Anders">Anders (Geef aan in omschrijving)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Laagdikte / Precisie</label>
                        <select 
                          className="w-full bg-brand-black border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none"
                          value={formData.precision}
                          onChange={(e) => setFormData({...formData, precision: e.target.value})}
                        >
                          <option value="0.20mm">0.20mm (Standaard, sneller klaar)</option>
                          <option value="0.12mm">0.12mm (Detail, gladder oppervlak)</option>
                          <option value="0.08mm">0.08mm (Hoge precisie)</option>
                          <option value="0.04mm">0.04mm (Ultra precisie - Resin/FDM)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Schaal</label>
                        <select 
                          className="w-full bg-brand-black border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none"
                          value={formData.scale}
                          onChange={(e) => setFormData({...formData, scale: e.target.value})}
                        >
                          <option value="100%">100% (Originele grootte)</option>
                          <option value="50%">50% (Halve grootte)</option>
                          <option value="200%">200% (Dubbele grootte)</option>
                          <option value="Anders">Andere schaal / dimensies</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Extra Omschrijving & Wensen</label>
                      <textarea 
                        rows={4}
                        placeholder="Vertel ons meer over het project. Waarvoor wordt het gebruikt? Moet het extra sterk zijn?"
                        className="w-full bg-brand-black border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-brand-blue transition-colors resize-none placeholder:text-white/20"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                      />
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-brand-blue/5 border border-brand-blue/20 rounded-lg mb-8">
                      <AlertCircle className="w-5 h-5 text-brand-blue flex-shrink-0" />
                      <p className="text-xs text-brand-blue">
                        Geen zorgen: voel je vrij om bestanden up te loaden, ook als je nog twijfelt over de instellingen. Wij kijken ernaar en adviseren altijd de beste printmethode!
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <button 
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-gray-400 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors"
                      >
                        Terug
                      </button>
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-brand-blue text-brand-black px-8 py-3 font-bold uppercase tracking-widest text-sm rounded hover:scale-105 transition-transform disabled:opacity-50 flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-brand-black border-t-transparent rounded-full animate-spin" />
                            Verzenden...
                          </>
                        ) : (
                          "Offerte Aanvragen"
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
