import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  if (sent) {
    return (
      <section className="p-6 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center animate-fade-in">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message envoyé !</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            Notre équipe vous contactera dans les 24h.
          </p>
          <button
            onClick={() => { setSent(false); setForm({ nom: '', email: '', message: '' }); }}
            className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-accent transition-colors"
          >
            Envoyer un autre message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="p-4 dark:bg-gray-900 min-h-screen">
      <h2 className="font-bold text-gray-900 dark:text-white text-lg mb-1">Contactez-nous</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
        Notre équipe est disponible 7j/7
      </p>

      {/* Contact info */}
      <div className="bg-primary/5 dark:bg-primary/20 rounded-2xl p-4 mb-5 space-y-2">
        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
          <MapPin className="w-4 h-4 text-primary dark:text-sky-400" />
          Tunis, Tunisie
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
          <Phone className="w-4 h-4 text-primary dark:text-sky-400" />
          +216 70 000 000
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
          <Mail className="w-4 h-4 text-primary dark:text-sky-400" />
          contact@travelagency.tn
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">
            Votre nom
          </label>
          <input
            type="text"
            required
            placeholder="Ex: Mohamed Ali"
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="exemple@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 block">
            Message
          </label>
          <textarea
            required
            rows={4}
            placeholder="Décrivez votre voyage idéal..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent hover:bg-orange-600 disabled:opacity-70 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
        >
          {loading ? (
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4" /> Envoyer le message
            </>
          )}
        </button>
      </form>
    </section>
  );
}

export default Contact;
