import React from 'react'
import NavigationPath from './../components/NavigationPath'

const MentionLegal = () => {
  return (
    <div className="font-montserrat text-gray-800">
      <div className="h-28"></div>

      <NavigationPath
        CurrentPage={'Mentions légales'}
        className="px-4 max-w-6xl mx-auto gap-2 items-center"
      />

      <div className="px-4 max-w-4xl mx-auto py-12 space-y-8">
        <h1 className="text-3xl font-semibold">Mentions légales</h1>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Éditeur du site</h2>
          <p>
            Nom du site : <strong>www.geoconsulting.fr</strong>
          </p>
          <p>
            Responsable de la publication : <strong>Eric Di Carlo</strong>
          </p>
          <p>
            Adresse : <strong>12 Avenue Maurice Thorez, Ivy-Sur-Seine</strong>
          </p>
          <p>
            SIRET : <strong>451 142 715 00049</strong>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Hébergement</h2>
          <p>
            Hébergeur : <strong>Ionos</strong>
          </p>
          <p>
            Site web : <strong>www.ionos.fr</strong>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
          <p>
            L’ensemble du contenu du site (textes, images, graphismes, logo,
            icônes, etc.) est protégé par le droit d’auteur et est la propriété
            exclusive de l’éditeur du site, sauf mention contraire.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Responsabilité</h2>
          <p>
            L’éditeur s’efforce de fournir des informations aussi précises que
            possible. Toutefois, il ne saurait être tenu responsable des
            omissions, inexactitudes ou carences dans la mise à jour.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Données personnelles</h2>
          <p>
            Les informations recueillies via le site sont traitées conformément
            à notre politique de confidentialité.
          </p>
        </section>
      </div>
    </div>
  )
}

export default MentionLegal
