import Link from "next/link";

export const metadata = {
  title: "À propos de Namesia",
  description: "La démarche de Namesia : explorer les origines, les histoires et les symboliques des prénoms avec curiosité et nuance.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-page-header">
        <p className="about-page-kicker">L’univers Namesia</p>
        <h1>Un prénom, mille histoires.</h1>
        <p className="about-page-lead">Namesia invite à découvrir les prénoms à travers leurs origines, leurs histoires et les imaginaires qu’ils inspirent. Une exploration curieuse, entre repères culturels et poésie.</p>
      </header>

      <section>
        <h2>Des faits, des traditions et de l’imaginaire</h2>
        <p>Un prénom peut avoir plusieurs formes, des origines discutées et des usages différents selon les époques et les cultures. Namesia cherche à présenter ces nuances plutôt qu’à réduire chaque prénom à une seule explication.</p>
        <p>Les étymologies et les repères historiques relèvent de recherches documentaires lorsqu’ils sont étayés. Les traditions religieuses et culturelles sont présentées comme telles. Les couleurs, éléments, animaux et autres associations symboliques proposées par Namesia relèvent, elles, d’un univers créatif.</p>
      </section>

      <section>
        <h2>La symbolique n’est pas une science</h2>
        <p>Les associations symboliques sont des interprétations imaginaires conçues pour le plaisir de la découverte. Elles ne sont ni des faits scientifiques, ni des prédictions, ni des indications sur la personnalité ou le destin d’une personne.</p>
      </section>

      <section>
        <h2>Des informations à lire avec nuance</h2>
        <p>Le sens d’un prénom peut varier selon les langues, les sources et les traditions. Lorsqu’il existe plusieurs interprétations, il est préférable de les considérer avec leur contexte plutôt que comme une vérité unique.</p>
        <p>Les données statistiques doivent être distinguées des exemples de présentation. Tant que les données officielles ne sont pas intégrées et vérifiées, les valeurs de démonstration affichées dans certaines fiches sont explicitement signalées comme fictives et ne doivent pas être prises pour des chiffres réels.</p>
      </section>

      <section>
        <h2>Explorer à votre rythme</h2>
        <p>Namesia est un point de départ pour la curiosité, pas une autorité définitive sur un prénom. Les informations gagnent à être recoupées lorsque la précision historique ou linguistique est importante.</p>
        <p><Link href="/">Revenir à l’exploration des prénoms ↗</Link></p>
      </section>
    </main>
  );
}
