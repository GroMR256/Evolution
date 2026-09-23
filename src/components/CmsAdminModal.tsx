'use client';

import React, { useState } from 'react';
import { X, Settings, Plus, Save, Scissors, Clock, ExternalLink, Check } from 'lucide-react';
import { ServiceItem } from '@/payload/collections/Services';
import { StylistItem } from '@/payload/collections/Stylists';
import { SalonInfoSettings } from '@/payload/globals/SalonInfo';

interface CmsAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: ServiceItem[];
  stylists: StylistItem[];
  salonInfo: SalonInfoSettings;
  onUpdateServices: (newServices: ServiceItem[]) => void;
  onUpdateSalonInfo: (newInfo: SalonInfoSettings) => void;
  onUpdateStylists: (newStylists: StylistItem[]) => void;
}

export const CmsAdminModal: React.FC<CmsAdminModalProps> = ({
  isOpen,
  onClose,
  services,
  stylists,
  salonInfo,
  onUpdateServices,
  onUpdateSalonInfo,
  onUpdateStylists,
}) => {
  const [activeTab, setActiveTab] = useState<'services' | 'salon'>('services');

  // New Service State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'Color & Balayage' | 'Haircuts & Styling' | 'Hair Extensions' | 'Treatments & Gloss'>('Color & Balayage');
  const [newPrice, setNewPrice] = useState('$240+');
  const [newDuration, setNewDuration] = useState('90 mins');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState('https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800');
  
  // Salon Info State
  const [tagline, setTagline] = useState(salonInfo.tagline);
  const [phone, setPhone] = useState(salonInfo.phone);
  const [announcement, setAnnouncement] = useState(salonInfo.announcementBarText || '');
  
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const created: ServiceItem = {
      id: `srv-custom-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      price: newPrice,
      duration: newDuration,
      description: newDescription || 'Custom luxury hair service provided by our master stylists.',
      featuredImage: newImage,
      isPopular: true,
    };

    onUpdateServices([created, ...services]);
    setNewTitle('');
    setNewDescription('');
    triggerSuccessNotice();
  };

  const handleSaveSalonInfo = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateSalonInfo({
      ...salonInfo,
      tagline,
      phone,
      announcementBarText: announcement,
    });
    triggerSuccessNotice();
  };

  const triggerSuccessNotice = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 animate-fade-in">
      <div className="relative max-w-3xl w-full bg-[#171511] rounded-3xl p-8 border-2 border-[#E5BD52]/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/15 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E5BD52] text-[#0A0A08] flex items-center justify-center font-bold">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-2xl text-white font-bold">Payload CMS Manager</h3>
                <span className="bg-[#4ADE80]/20 text-[#4ADE80] text-xs px-2.5 py-0.5 rounded-full font-bold border border-[#4ADE80]/40">
                  Live Web Sync
                </span>
              </div>
              <p className="text-[#E3DDD4] text-xs font-medium">
                Panel de edición de contenidos para el personal del Hair Salon
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/admin"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#26231C] hover:bg-[#E5BD52] text-[#F7EAB8] hover:text-[#0A0A08] text-xs px-3.5 py-2 rounded-xl border border-[#E5BD52]/40 font-bold transition-all"
            >
              <span>Payload Full Dashboard</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="text-[#E3DDD4] hover:text-white p-2 rounded-full bg-[#26231C] border border-white/15"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Success Alert Banner */}
        {savedNotice && (
          <div className="mb-5 bg-[#4ADE80]/20 border border-[#4ADE80] text-[#4ADE80] text-xs px-4 py-3 rounded-xl flex items-center gap-2 font-bold animate-fade-in">
            <Check className="w-4 h-4" />
            <span>¡Contenido actualizado en vivo! Los cambios ya son visibles en el sitio web.</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/15 mb-6 gap-6">
          <button
            onClick={() => setActiveTab('services')}
            className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 border-b-2 ${
              activeTab === 'services'
                ? 'border-[#E5BD52] text-[#F7EAB8]'
                : 'border-transparent text-[#A8A092] hover:text-white'
            }`}
          >
            <Scissors className="w-4 h-4" />
            Administrar Servicios ({services.length})
          </button>
          <button
            onClick={() => setActiveTab('salon')}
            className={`pb-3 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 border-b-2 ${
              activeTab === 'salon'
                ? 'border-[#E5BD52] text-[#F7EAB8]'
                : 'border-transparent text-[#A8A092] hover:text-white'
            }`}
          >
            <Clock className="w-4 h-4" />
            Textos & Anuncios Globales
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="overflow-y-auto flex-1 pr-2 space-y-6">
          
          {/* SERVICES TAB */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              
              {/* Form to Add Service */}
              <form onSubmit={handleAddService} className="bg-[#1D1B16] p-6 rounded-2xl border border-[#E5BD52]/40 space-y-4 shadow-xl">
                <h4 className="text-white font-bold text-sm flex items-center gap-2">
                  <Plus className="w-4 h-4 text-[#E5BD52]" />
                  Agregar Nuevo Servicio al Menú Web
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#E3DDD4] mb-1">Nombre del Servicio</label>
                    <input
                      type="text"
                      placeholder="ej. Signature Honey Gloss"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full bg-[#0A0A08] text-white border border-white/20 rounded-xl px-3.5 py-2.5 text-xs focus:border-[#E5BD52] outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#E3DDD4] mb-1">Categoría Payload</label>
                    <select
                      value={newCategory}
                      onChange={(e: any) => setNewCategory(e.target.value)}
                      className="w-full bg-[#0A0A08] text-white border border-white/20 rounded-xl px-3.5 py-2.5 text-xs focus:border-[#E5BD52] outline-none"
                    >
                      <option value="Color & Balayage">Color & Balayage</option>
                      <option value="Haircuts & Styling">Haircuts & Styling</option>
                      <option value="Hair Extensions">Hair Extensions</option>
                      <option value="Treatments & Gloss">Treatments & Gloss</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#E3DDD4] mb-1">Precio ($ USD)</label>
                    <input
                      type="text"
                      placeholder="$250+"
                      value={newPrice}
                      onChange={(e) => setNewPrice(e.target.value)}
                      className="w-full bg-[#0A0A08] text-white border border-white/20 rounded-xl px-3.5 py-2.5 text-xs focus:border-[#E5BD52] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#E3DDD4] mb-1">Duración Estimada</label>
                    <input
                      type="text"
                      placeholder="90 mins"
                      value={newDuration}
                      onChange={(e) => setNewDuration(e.target.value)}
                      className="w-full bg-[#0A0A08] text-white border border-white/20 rounded-xl px-3.5 py-2.5 text-xs focus:border-[#E5BD52] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#E3DDD4] mb-1">Descripción</label>
                  <textarea
                    rows={2}
                    placeholder="Detalles del tratamiento..."
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    className="w-full bg-[#0A0A08] text-white border border-white/20 rounded-xl px-3.5 py-2.5 text-xs focus:border-[#E5BD52] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold text-xs w-full py-3"
                >
                  <Plus className="w-4 h-4" />
                  Publicar Servicio en el Sitio Web
                </button>
              </form>

              {/* Published Services List */}
              <div className="space-y-3">
                <h4 className="text-white text-xs font-bold uppercase tracking-wider text-[#A8A092]">
                  Servicios Activos ({services.length})
                </h4>
                {services.map((srv) => (
                  <div
                    key={srv.id}
                    className="bg-[#1D1B16] p-4 rounded-xl border border-white/10 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={srv.featuredImage}
                        alt={srv.title}
                        className="w-12 h-12 rounded-lg object-cover border border-[#E5BD52]/40"
                      />
                      <div>
                        <h5 className="text-white text-sm font-bold">{srv.title}</h5>
                        <p className="text-[#E3DDD4] text-xs">{srv.category} • <span className="text-[#F7EAB8] font-semibold">{srv.price}</span> • {srv.duration}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-[#E5BD52]/20 text-[#F7EAB8] px-3 py-1 rounded-full font-bold border border-[#E5BD52]/40">
                      Publicado
                    </span>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* GLOBAL SALON INFO TAB */}
          {activeTab === 'salon' && (
            <form onSubmit={handleSaveSalonInfo} className="space-y-5 bg-[#1D1B16] p-6 rounded-2xl border border-white/15">
              <h4 className="text-white font-bold text-sm">Ajustes del Salon en Los Ángeles</h4>

              <div>
                <label className="block text-xs font-semibold text-[#E3DDD4] mb-1">Encabezado Principal (Hero Tagline)</label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full bg-[#0A0A08] text-white border border-white/20 rounded-xl px-4 py-2.5 text-xs focus:border-[#E5BD52] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#E3DDD4] mb-1">Texto del Banner Superior de Anuncios</label>
                <input
                  type="text"
                  value={announcement}
                  onChange={(e) => setAnnouncement(e.target.value)}
                  className="w-full bg-[#0A0A08] text-white border border-white/20 rounded-xl px-4 py-2.5 text-xs focus:border-[#E5BD52] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#E3DDD4] mb-1">Teléfono de Citas en LA</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#0A0A08] text-white border border-white/20 rounded-xl px-4 py-2.5 text-xs focus:border-[#E5BD52] outline-none"
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full text-xs py-3"
              >
                <Save className="w-4 h-4" />
                Guardar Cambios Globales
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
