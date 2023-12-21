import Proyecto from '../components/Proyecto';
import datosProyecto from '../components/datosProyecto';

function Portfolio() {
  return (
    <div className="portfolio p-8 pt-20">
      <h1 className="text-3xl font-bold mb-6">My projects</h1>
      <div className="space-y-8">
        {datosProyecto.map((proyecto) => (
          <Proyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
