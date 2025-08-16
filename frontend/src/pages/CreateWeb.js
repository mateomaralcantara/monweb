import React, { useState } from "react";

const initialState = {
  businessName: "",
  businessType: "",
  description: "",
  colorPrimary: "#DC2626",
  colorSecondary: "#EA580C",
  template: "Restaurante Gourmet", // Puedes pasarlo como prop si viene de selección previa
  funcionalidades: [],            // Si tienes checkboxes de funcionalidades, añade aquí
};

const businessTypes = [
  "Restaurante", "Tienda", "Consultoría", "Educación", "Salud", "Inmobiliaria", "Otro"
];

export default function CreateWeb() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  // Maneja los cambios en los inputs
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Simula avanzar y retroceder pasos
  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  // Envía el formulario
  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      // Aquí adaptas el fetch a tu backend:
      const res = await fetch("http://localhost:8000/api/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_name: form.businessName,
          email: "cliente@email.com", // <-- puedes pedirlo en otro paso
          phone: "",                  // <-- si lo necesitas
          service: `${form.businessType} - ${form.template}`,
          message: `Descripción: ${form.description}\nColores: ${form.colorPrimary}, ${form.colorSecondary}\nFuncionalidades: ${form.funcionalidades.join(", ")}`
        })
      });

      if (res.ok) {
        setSuccess(true);
        setStep(3);
      } else {
        alert("Error enviando tu información. Intenta de nuevo.");
      }
    } catch (err) {
      alert("Error de red: " + err.message);
    }
    setLoading(false);
  };

  // ---- Renderizado por pasos (stepper) ----
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
          placeholder="Describe brevemente tu negocio, productos o servicios..."
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={3}
        />
        {/* Colores */}
        <div className="flex space-x-4">
          <div>
            <label className="block text-xs text-muted-foreground mb-1">Color principal</label>
            <input
              type="color"
              name="colorPrimary"
              value={form.colorPrimary}
              onChange={handleChange}
              className="w-12 h-8 rounded border"
            />
          </div>
          <div>
            <label className="block text-xs text-muted-foreground mb-1">Color secundario</label>
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

  if (step === 2) {
    // "Confirmación"
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

  if (step === 3 && success) {
    // "Gracias"
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
