import { Link } from 'react-router-dom';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Project Manager',
      company: 'Tech Startup Indonesia',
      image: '/assets/testimonials/budi.jpg',
      rating: 5,
      text: 'Taskify benar-benar mengubah cara tim kami bekerja. Produktivitas meningkat 45% sejak menggunakan platform ini. Fitur kanban board dan calendar sangat membantu!',
      highlight: 'Produktivitas +45%'
    },
    {
      name: 'Siti Rahma',
      role: 'Freelance Designer',
      company: 'Creative Studio',
      image: '/assets/testimonials/siti.jpg',
      rating: 5,
      text: 'Sebagai freelancer yang mengelola banyak klien, Taskify sangat memudahkan saya track semua deadline dan prioritas. Interface-nya intuitif dan visualnya menarik!',
      highlight: 'Mudah & Intuitif'
    },
    {
      name: 'Ahmad Fauzi',
      role: 'Software Developer',
      company: 'Digital Agency',
      image: '/assets/testimonials/ahmad.jpg',
      rating: 5,
      text: 'Dark mode yang smooth, drag-and-drop yang responsif, dan analytics real-time. Taskify adalah aplikasi task management terbaik yang pernah saya gunakan!',
      highlight: 'Fitur Lengkap'
    },
    {
      name: 'Dinda Permata',
      role: 'Marketing Manager',
      company: 'E-commerce Platform',
      image: '/assets/testimonials/dinda.jpg',
      rating: 5,
      text: 'Tim marketing kami jadi lebih terorganisir dengan Taskify. Kolaborasi jadi lebih mudah, dan kami bisa track campaign dari planning hingga execution.',
      highlight: 'Kolaborasi Tim'
    },
    {
      name: 'Rudi Hartono',
      role: 'Student',
      company: 'Universitas Indonesia',
      image: '/assets/testimonials/rudi.jpg',
      rating: 5,
      text: 'Gratis untuk pelajar dan fiturnya lengkap! Saya bisa manage tugas kuliah, organisasi, dan side project dalam satu tempat. Sangat recommended!',
      highlight: 'Gratis Mahasiswa'
    },
    {
      name: 'Lisa Wijaya',
      role: 'Content Creator',
      company: 'YouTube Channel',
      image: '/assets/testimonials/lisa.jpg',
      rating: 5,
      text: 'Calendar view dan reminder-nya sangat membantu saya manage jadwal upload content. Tidak ada lagi deadline yang terlewat sejak pakai Taskify!',
      highlight: 'No Missed Deadline'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Pengguna Aktif' },
    { number: '4.9/5', label: 'Rating Pengguna' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '50+', label: 'Perusahaan Trust' }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Testimoni Pengguna</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Dipercaya Oleh <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Ribuan Pengguna</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Dengarkan cerita sukses dari pengguna Taskify di berbagai industri
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-6xl text-blue-100 dark:text-blue-900/30 opacity-50">
                "
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full mb-6">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{testimonial.highlight}</span>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By Companies */}
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 font-medium">
            Dipercaya oleh perusahaan ternama
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[
              { name: 'Gojek', logo: '🚗' },
              { name: 'Tokopedia', logo: '🛒' },
              { name: 'Traveloka', logo: '✈️' },
              { name: 'Bukalapak', logo: '📦' },
              { name: 'Shopee', logo: '🛍️' }
            ].map((company, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-2">{company.logo}</div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
            Bergabunglah dengan ribuan pengguna yang sudah merasakan manfaatnya
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Mulai Gratis Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
