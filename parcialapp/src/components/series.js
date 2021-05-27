import { useEffect, useState } from "react";
import Serie from "./serie";

const Series = () => {
  const [state, setState] = useState({ seriesLista: [] });
  const [serie, setSerie] = useState({ serieElegida:{} });

  const handleClick = (e) => {
    const id = e.nativeEvent.path[1].id;
    const serieElegida = state.seriesLista[id - 1];
    console.log(serieElegida);
    setSerie(serieElegida);
  };

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/a467415350e87c13faf9c8e843ea2fd20df056f3/series-es.json"
    )
      .then((res) => res.json())
      .then((seriesLista) => {
        setState({ seriesLista });
      });
  }, []);

  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <h1> T.V. Series </h1>
        </div>
        <div class="row">
          <div class="col-6">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Channel</th>
                  <th scope="col">Seasons</th>
                  <th scope="col">Episodes</th>
                  <th scope="col">Release Date</th>
                </tr>
              </thead>
              <tbody>
                {state.seriesLista.map((serie) => (
                  <tr id={serie.id} key={serie.id} onClick={handleClick}>
                    <th>{serie.id}</th>
                    <td>{serie.name}</td>
                    <td>{serie.channel}</td>
                    <td>{serie.seasons}</td>
                    <td>{serie.episodes}</td>
                    <td>{serie.release}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="col-6">
            <div>
            {/* {serie.serieElegida.map((e, i) => <Serie key={i} serie={e} />)} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Series;
