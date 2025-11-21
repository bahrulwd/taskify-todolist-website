import { useState } from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Free',
      description: 'Untuk individu yang ingin mencoba Taskify',
      price: { monthly: 0, yearly: 0 },
      features: [
        'Hingga 10 proyek',
        '50 tugas per proyek',
        'Kanban board dasar',
        'Calendar view',
        'Mobile app',
        'Dark mode',
        'Email support'
      ],
      limitations: [
        'Tanpa analytics',
        'Tanpa integrasi',
        'Tanpa recurring tasks'
      ],
      cta: 'Mulai Gratis',
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Pro',
      description: 'Untuk profesional dan freelancer',
      price: { monthly: 49000, yearly: 490000 },
      features: [
        'Unlimited proyek',
        'Unlimited tugas',
        'Advanced kanban board',
        'Calendar + timeline view',
        'Real-time analytics',
        'Recurring tasks',
        'Integrations (10+)',
        'Priority support',
        'Custom themes',
        'Export data'
      ],
      limitations: [],
      cta: 'Coba 14 Hari Gratis',
      popular: true,
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Team',
      description: 'Untuk tim dan organisasi',
      price: { monthly: 99000, yearly: 990000 },
      features: [
        'Semua fitur Pro',
        'Unlimited team members',
        'Team collaboration',
        'Advanced permissions',
        'Team analytics',
        'Dedicated support',
        'Custom integrations',
        'SSO & security',
        'API access',
        'Onboarding training'
      ],
      limitations: [],
      cta: 'Hubungi Sales',
      popular: false,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const formatPrice = (price: number, period: 'monthly' | 'yearly') => {
    if (price === 0) return 'Gratis';
    
    const displayPrice = period === 'yearly' ? Math.floor(price / 12) : price;
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(displayPrice);
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
            </svg>
            <span>Harga Transparan</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Pilih Paket Yang <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tepat</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Mulai gratis tanpa kartu kredit. Upgrade kapan saja sesuai kebutuhan Anda
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 relative ${
                billingPeriod === 'yearly'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Tahunan
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'border-blue-500 dark:border-blue-400 scale-105'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg">
                    PALING POPULER
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      {formatPrice(plan.price[billingPeriod], billingPeriod)}
                    </span>
                    {plan.price[billingPeriod] > 0 && (
                      <span className="text-gray-500 dark:text-gray-400">/bulan</span>
                    )}
                  </div>
                  {billingPeriod === 'yearly' && plan.price.yearly > 0 && (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                      Hemat {formatPrice(plan.price.monthly * 12 - plan.price.yearly, 'yearly')} per tahun
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <Link
                  to={plan.name === 'Team' ? '/contact' : '/'}
                  className={`block w-full py-3 px-6 rounded-lg font-bold text-center transition-all duration-300 transform hover:scale-105 mb-6 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                    {plan.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Pertanyaan Umum
          </h3>
          
          <div className="space-y-4">
            {[
              {
                q: 'Apakah saya perlu kartu kredit untuk uji coba gratis?',
                a: 'Tidak! Anda bisa mulai dengan paket Free tanpa kartu kredit. Untuk paket Pro, uji coba 14 hari juga tanpa kartu kredit.'
              },
              {
                q: 'Bisakah saya upgrade atau downgrade kapan saja?',
                a: 'Ya, Anda bisa mengubah paket kapan saja. Jika upgrade, fitur baru langsung aktif. Jika downgrade, berlaku di periode billing berikutnya.'
              },
              {
                q: 'Bagaimana dengan data saya jika saya cancel subscription?',
                a: 'Data Anda akan tetap tersimpan selama 60 hari. Anda bisa export atau reactive subscription dalam periode tersebut.'
              },
              {
                q: 'Apakah ada diskon untuk mahasiswa atau nonprofit?',
                a: 'Ya! Kami menyediakan diskon 50% untuk mahasiswa dan organisasi nonprofit. Hubungi kami untuk verifikasi.'
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700"
              >
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {faq.q}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Siap Meningkatkan Produktivitas?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Mulai uji coba gratis 14 hari. Tanpa kartu kredit. Cancel kapan saja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Mulai Gratis Sekarang
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
              >
                Hubungi Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
