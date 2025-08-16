import React, { useState } from "react";
import { apiFetch } from "../services/api"; // 👈 importamos el helper

const initialState = {
  businessName: "",
  businessType: "",
  description: "",
  colorPrimary: "#DC2626",
  colorSecondary: "#EA580C",
  template: "Restaurante Gourmet",
  funcionalidades: [],
};

const businessTypes = [
  "Restaurante", "Tienda", "Consultoría", "Educación", "Salud", "Inmobiliaria", "Otro"
];

export default function CreateWeb() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  // 👉 aquí usamos apiFetch en vez de fetch directo
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await apiFetch("/status", {
        method: "POST",
        body: JSON.stringify({
          client_name: form.businessName,
          email: "cliente@email.com",
          phone: "",
          service: `${form.businessType} - ${form.template}`,
          message: `Descripción: ${form.description}\nColores: ${form.colorPrimary}, ${form.colorSecondary}\nFuncionalidades: ${form.funcionalidades.join(", ")}`
        })
      });

      if (res) {
        setSuccess(true);
        setStep(3);
      }
    } catch (err) {
      alert("❌ Error enviando: " + err.message);
    }
    setLoading(false);
  };

  // ---- Paso 1
  if (step === 1) {
    return (
      <form onSubmit={next} className="max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-lg space-y-6 mt-8">
        <h2 className="text-2xl font-bold mb-2">Personaliza el contenido</h2>
        <input
          name="businessName"
          required
          placeholder="Nombre de tu negocio"
          value={form.businessName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <select
          name="businessType"
          required
          value={form.businessType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Selecciona tu tipo de negocio</option>
          {businessTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <textarea
          name="description"
          required
          placeholder="Describe brevemente tu negocio..."
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={3}
        />
        <div className="flex space-x-4">
          <div>
            <label className="block text-xs mb-1">Color principal</label>
            <input
              type="color"
              name="colorPrimary"
              value={form.colorPrimary}
              onChange={handleChange}
              className="w-12 h-8 rounded border"
            />
          </div>
          <div>
            <label className="block text-xs mb-1">Color secundario</label>
            <input
              type="color"
              name="colorSecondary"
              value={form.colorSecondary}
              onChange={handleChange}
              className="w-12 h-8 rounded border"
            />
          </div>
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold py-3 rounded-lg">
          Siguiente
        </button>
      </form>
    );
  }

  // ---- Paso 2
  if (step === 2) {
    return (
      <div className="max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-lg space-y-8 mt-8">
        <h2 className="text-2xl font-bold mb-2">¡Tu web está lista!</h2>
        <div className="mb-4">
          <h3 className="font-semibold mb-1">Resumen del proyecto</h3>
          <div><b>Plantilla:</b> {form.template}</div>
          <div><b>Negocio:</b> {form.businessName}</div>
          <div><b>Tipo:</b> {form.businessType}</div>
          <div><b>Descripción:</b> {form.description}</div>
          <div>
            <b>Colores:</b> 
            <span style={{ background: form.colorPrimary, color: "#fff", padding: "2px 8px", borderRadius: 4, marginLeft: 4 }}>{form.colorPrimary}</span>
            <span style={{ background: form.colorSecondary, color: "#fff", padding: "2px 8px", borderRadius: 4, marginLeft: 8 }}>{form.colorSecondary}</span>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold py-3 rounded-lg"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Confirmar y crear web"}
        </button>
        <button
          onClick={prev}
          className="w-full mt-2 border border-gray-400 text-gray-600 font-semibold py-3 rounded-lg"
        >
          Anterior
        </button>
      </div>
    );
  }

  // ---- Paso 3
  if (step === 3 && success) {
    return (
      <div className="max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-lg mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-600">¡Proyecto recibido! 🚀</h2>
        <div className="mb-6">Nuestro equipo revisará tu proyecto y te contactará en 24 horas.<br />Tu web estará lista en 3-5 días.</div>
        <a href="/" className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold py-3 px-8 rounded-lg mt-4">
          Volver al inicio
        </a>
      </div>
    );
  }

  return null;
}
