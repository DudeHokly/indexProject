import { Container, Pagination, ProjectCard } from "./shared/index";

import coffes from "../../public/coffes.json";

export default function Home() {
  return (
    <Container className="my-10">
      <div>
        <h1 className="text-3xl text-center">Галлерея</h1>
      </div>
      <div className="flex flex-1 justify-center">
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          {/* Карточка 1 */}
          {coffes[0] && (
            <div>
              <ProjectCard
                id={coffes[0].id}
                title={coffes[0].title}
                img={coffes[0].img}
                price={coffes[0].price}
                description={coffes[0].description}
              />
            </div>
          )}

          {/* Карточка 2 */}
          {coffes[1] && (
            <div className="col-start-1 row-start-2">
              <ProjectCard
                id={coffes[1].id}
                title={coffes[1].title}
                img={coffes[1].img}
                price={coffes[1].price}
                description={coffes[1].description}
              />
            </div>
          )}

          {/* Карточка 3 (занимает 2 строки) */}
          {coffes[2] && (
            <div className="row-span-2 col-start-2 row-start-1">
              <ProjectCard
                id={coffes[2].id}
                title={coffes[2].title}
                img={coffes[2].img}
                price={coffes[2].price}
                description={coffes[2].description}
              />
            </div>
          )}

          {/* Карточка 4 */}
          {coffes[3] && (
            <div className="col-start-3 row-start-1">
              <ProjectCard
                id={coffes[3].id}
                title={coffes[3].title}
                img={coffes[3].img}
                price={coffes[3].price}
                description={coffes[3].description}
              />
            </div>
          )}

          {/* Карточка 5 */}
          {coffes[4] && (
            <div className="col-start-3 row-start-2">
              <ProjectCard
                id={coffes[4].id}
                title={coffes[4].title}
                img={coffes[4].img}
                price={coffes[4].price}
                description={coffes[4].description}
              />
            </div>
          )}

          {/* Карточка 6 */}
          {coffes[5] && (
            <div className="row-start-3">
              <ProjectCard
                id={coffes[5].id}
                title={coffes[5].title}
                img={coffes[5].img}
                price={coffes[5].price}
                description={coffes[5].description}
              />
            </div>
          )}

          {/* Карточка 7 */}
          {coffes[6] && (
            <div className="col-start-1 row-start-4">
              <ProjectCard
                id={coffes[6].id}
                title={coffes[6].title}
                img={coffes[6].img}
                price={coffes[6].price}
                description={coffes[6].description}
              />
            </div>
          )}

          {/* Карточка 8 (занимает 2 строки) */}
          {coffes[7] && (
            <div className="row-span-2 col-start-2 row-start-3">
              <ProjectCard
                id={coffes[7].id}
                title={coffes[7].title}
                img={coffes[7].img}
                price={coffes[7].price}
                description={coffes[7].description}
              />
            </div>
          )}

          {/* Карточка 9 */}
          {coffes[8] && (
            <div className="col-start-3 row-start-3">
              <ProjectCard
                id={coffes[8].id}
                title={coffes[8].title}
                img={coffes[8].img}
                price={coffes[8].price}
                description={coffes[8].description}
              />
            </div>
          )}

          {/* Карточка 10 */}
          {coffes[9] && (
            <div className="col-start-3 row-start-4">
              <ProjectCard
                id={coffes[9].id}
                title={coffes[9].title}
                img={coffes[9].img}
                price={coffes[9].price}
                description={coffes[9].description}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center pt-6">
        <Pagination />
      </div>
    </Container>
  );
}
