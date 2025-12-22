import { motion } from 'framer-motion'
import { Link } from 'react-router'
import NavigationPath from './../components/NavigationPath'

const usefulLinks = [
  { text: 'Accueil', href: '/' },
  { text: 'À propos', href: '/about' },
  { text: 'Nos services', href: '/services' },
  { text: 'Réalisations', href: '/realisations' },
  { text: 'Contact', href: '/contact' },
]

const legalLinks = [
  { text: 'Mentions légales', href: '/mentions-legales' },
  { text: 'Politique de confidentialité', href: '/politique-confidentialite' },
  { text: 'Plan du site', href: '/plan-du-site' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const SitePlan = () => {
  return (
    <div className="font-montserrat text-bluemarine">
      
      {/* Contenu principal */}
      <div className="px-4 py-30 md:py-30 max-w-4xl mx-auto space-y-12">
        
        <h1 className="text-3xl md:text-4xl font-semibold">
          Plan du site
        </h1>

        {/* Pages principales */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            Pages principales
          </h2>

          <ul className="space-y-2">
            {usefulLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className="text-bluegeo hover:underline"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Pages légales */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            Pages légales
          </h2>

          <ul className="space-y-2">
            {legalLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className="text-bluegeo hover:underline"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="pt-16"
        >
          <div className="bg-blue-100 p-8 md:p-12 rounded-2xl flex flex-col items-center gap-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-bluegeo">
              Un projet, un besoin, une mise à jour de vos plans ?
            </h2>

            <p className="text-gray-700 max-w-xl">
              Contactez Mano Consulting pour échanger sur votre projet et
              bénéficier d’un accompagnement technique adapté à vos enjeux.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-bluegeo text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default SitePlan
