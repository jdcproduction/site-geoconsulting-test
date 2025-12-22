import React from 'react'
import CTA from './../components/CTA'
import NavigationPath from './../components/NavigationPath'

const Confidentialite = () => {
  return (
    <div className="font-montserrat text-gray-800">
      <div className="h-28"></div>

      <NavigationPath
        CurrentPage={'Politique de confidentialité'}
        className="px-4 max-w-6xl mx-auto gap-2 items-center"
      />

      <div className="px-4 max-w-4xl mx-auto py-12 space-y-8">
        <h1 className="text-3xl font-semibold">
          Politique de confidentialité
        </h1>

        <p className="text-sm text-gray-500">
          Dernière mise à jour : {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            La présente politique de confidentialité décrit la manière dont nous
            collectons, utilisons et protégeons vos données personnelles lorsque
            vous utilisez notre site web.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            2. Données collectées
          </h2>
          <p>
            Nous pouvons être amenés à collecter les informations suivantes :
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Données de navigation (adresse IP, type de navigateur, pages visitées)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            3. Utilisation des données
          </h2>
          <p>
            Les données collectées sont utilisées pour :
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Fournir et améliorer nos services</li>
            <li>Répondre à vos demandes via les formulaires de contact</li>
            <li>Assurer la sécurité du site</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            4. Cookies
          </h2>
          <p>
            Nous ne collectons pas les cookies de nos utilisateurs. Vous pouvez naviguer sereinnement sur notre site internet.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            5. Partage des données
          </h2>
          <p>
            Vos données personnelles ne sont ni vendues ni louées. Nous tenons a préciser qu'elles ne sont
            pas partagées et ce avec aucuns de nos prestataires.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            6. Sécurité
          </h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles
            appropriées afin de protéger vos données contre toute perte, accès
            non autorisé ou divulgation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            7. Vos droits
          </h2>
          <p>
            Conformément à la réglementation en vigueur (RGPD), vous disposez
            des droits suivants :
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Droit d’accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l’effacement</li>
            <li>Droit d’opposition et de limitation</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            8. Contact
          </h2>
          <p>
            Pour toute question concernant cette politique de confidentialité,
            vous pouvez nous contacter via notre formulaire de contact :
          </p>
          <CTA className='border hover:bg-bluegeo hover:text-white '/>
        </section>
      </div>
    </div>
  )
}

export default Confidentialite
