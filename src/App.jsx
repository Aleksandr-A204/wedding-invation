import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [form, setForm] = useState({ name: "", email: "", rsvp: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = 'Wedding Invitation "True Love"';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить отправку данных
    setSent(true);
  };

  return (
    <main
      className="min-h-screen relative bg-center bg-cover flex items-center justify-center"
      style={{
        // Поменяйте на вашу картинку или путь
        // backgroundImage: "url('/api/placeholder/1200/800')",
      }}
    >
      {/* Overlay filter */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-4xl p-6 md:p-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left image column */}
            <div className="md:w-1/2">
              <img
                src="/api/placeholder/640/480"
                alt="Wedding banner"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            {/* Right content column */}
            <div className="md:w-1/2 p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-3">Wedding Invitation "True Love"</h1>
              <p className="text-slate-600 mb-6">Please answer a few questions that we have prepared for you</p>

              {sent ? (
                <div className="p-4 bg-green-50 border border-green-200 rounded">Thank you — your response has been recorded.</div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Your name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded border-slate-200 shadow-sm focus:ring-2 focus:ring-rose-300 p-2"
                      placeholder="Alex & Emily"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded border-slate-200 shadow-sm focus:ring-2 focus:ring-rose-300 p-2"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">Will you attend?</label>
                    <select
                      name="rsvp"
                      value={form.rsvp}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded border-slate-200 shadow-sm focus:ring-2 focus:ring-rose-300 p-2"
                      required
                    >
                      <option value="">Choose</option>
                      <option value="yes">Yes, happily</option>
                      <option value="no">No, sadly</option>
                      <option value="maybe">Maybe</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">Message (optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded border-slate-200 shadow-sm focus:ring-2 focus:ring-rose-300 p-2"
                      rows={3}
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-4 py-2 rounded bg-rose-600 text-white font-medium hover:bg-rose-700"
                    >
                      Send response
                    </button>

                    <button
                      type="button"
                      onClick={() => setForm({ name: "", email: "", rsvp: "", message: "" })}
                      className="text-sm text-slate-600 underline"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              )}

              <p className="text-xs text-slate-500 mt-4">Original page used Tilda components and many external scripts — in this React version we provide a clean, maintainable base.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
