import { useState } from "react";
import { MdIron, MdNotInterested } from "react-icons/md";
import { VscChevronUp, VscChevronDown } from "react-icons/vsc";
import { GiWashingMachine } from "react-icons/gi";
import { useSelector } from "react-redux";

const SelectoresProduct = () => {
  const [desplegable, setDesplegable] = useState(false);
  const [cuidados, setCuidados] = useState(false);
  const [descripcion, setDescripcion] = useState(false);
  const details = useSelector((state) => state.details);
  const imagenes = useSelector((state) => state.images);
  const color = useSelector((state) => state.color);

  function handleClick(e) {
    setDesplegable(!desplegable);
  }
  function handleClickC(e) {
    setCuidados(!cuidados);
  }
  function handleClickD(e) {
    setDescripcion(!descripcion);
  }
  return (
    <div className=" flex flex-col mt-[100px] ml-16 dark:bg-main-dark">
      <ul className="flex flex-col text-justify dark:bg-main-dark">
        <li className="text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b flex flex-col w-full dark:bg-main-dark">
          <div className="flex flex-row p-4 font-bold  dark:text-main-light dark:bg-main-dark">
            Descripción{" "}
            <button onClick={(e) => handleClickD(e)}>
              {descripcion === false ? <VscChevronDown /> : <VscChevronUp />}
            </button>{" "}
          </div>
          {descripcion !== false && (
            <div className="flex flex-row gap-[25px] dark:bg-main-dark">
              <div className="flex flex-col dark:text-main-light dark:bg-main-dark">
                {details.clotheType === "Camiseta" && (
                  <div className=" flex flex-col text-[30px] w-[600px] text-border font-bold gap-[15px] ">
                    <p>{details.name}</p>
                    <p>diseñada para hinchas de verdad</p>
                  </div>
                )}
                {details.clotheType === "Short" && (
                  <div className=" flex flex-col text-[30px] w-[600px] text-border font-bold gap-[15px] ">
                    <p>Los Clásicos {details.name}</p>
                    <p>Hechos con materiales reciclados</p>
                  </div>
                )}
                {details.clotheType === "Pelota" && (
                  <div className=" flex flex-col text-[30px] w-[600px] text-border font-bold gap-[15px] ">
                    <p>Escribe tu propia historia futbolística</p>

                    <p>Con la nueva {details.name}</p>
                  </div>
                )}
                {details.clotheType === "Buzo" && (
                  <div className=" flex flex-col text-[30px] w-[600px] text-border font-bold gap-[15px] mt-[100px] ">
                    <p>Lucí un estilo único y cómodo con</p>

                    <p>El nuevo {details.name}</p>
                  </div>
                )}

                <div>
                  {details.clotheType === "Camiseta" && (
                    <div>
                      <p className="w-[600px] mt-[10px]">
                        La nueva {details.name} ofrece comodidad en todo momento
                        gracias a su tejido suave con tecnología de absorción
                        AEROREADY.
                      </p>
                      <p className="w-[600px] mt-[10px]">
                        Los detalles en la parte interior trasera del cuello
                        están inspirados en la bandera nacional que los
                        jugadores representan con tanto orgullo. Un producto
                        hecho parcialmente con contenido reciclado generado a
                        partir de desechos de producción, tales como recortes de
                        tela, y desechos domésticos postconsumo, para evitar un
                        mayor impacto ambiental al producir contenido virgen.
                      </p>
                    </div>
                  )}
                  {details.clotheType === "Short" && (
                    <div>
                      <p className="w-[600px] mt-[10px]">
                        Los nuevos {details.name} siguen el ejemplo de la
                        camiseta a la que acompañan. Creados para mantener
                        cómodo al hincha, están hechos de tejido suave y cuentan
                        con tecnología de absorción AEROREADY. EL logo de la
                        selección bordado le pone el toque final al diseño.
                      </p>
                      <p className="w-[600px] mt-[10px]">
                        Hecho con materiales 100% reciclados, este producto
                        representa solo una de nuestras soluciones para acabar
                        con los residuos plásticos.
                      </p>
                    </div>
                  )}
                  {details.clotheType === "Pelota" && (
                    <div>
                      <p className="w-[600px] mt-[10px]">
                        La nueva {details.name} ofrece un toque suave y una gran
                        resistencia al desgaste.La {details.name}
                        está cosida a máquina para una mayor fiabilidad.
                      </p>
                      <p className="w-[600px] mt-[10px]">
                        Su cámara de butilo a mantiene inflada por más tiempo,
                        sin importar si estás en el campo de entrenamiento o en
                        el parque.
                      </p>
                    </div>
                  )}
                  {details.clotheType === "Buzo" && (
                    <div className=" flex  flex-col justify-center items-center ">
                      <p className="w-[600px] mt-[10px]">
                        No subestimes el poder de un buen buzo. Este de {details.name}
                        se puede combinar con varios atuendos, además de
                        proporcionar una gran comodidad y reflejar tu confianza
                        en vos mismo.Ponetelo y disfrutá.
                      </p>
                      <p className="w-[600px] mt-[10px]">
                      Nuestros productos de algodón apoyan el cultivo de algodón sostenible.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                {details.clotheType === "Pelota" ? (
                  <img
                    src={imagenes[2]}
                    alt="imagen del product"
                    width="350px"
                    height="350px"
                    className="ml-[30px]"
                  />
                ) : (
                  <img
                    src={imagenes[1]}
                    alt="imagen del product"
                    width="450px"
                    height="450px"
                  />
                )}
              </div>
            </div>
          )}
        </li>
        {details.clotheType !== "Pelota" && (
          <li className="text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b flex flex-col gap[5px] w-full dark:bg-main-dark">
            <div className="flex flex-row p-4 font-bold dark:text-main-light dark:bg-main-dark">
              Cuidados{" "}
              <button onClick={(e) => handleClickC(e)}>
                {cuidados === false ? <VscChevronDown /> : <VscChevronUp />}
              </button>{" "}
            </div>
            {cuidados !== false &&(
             
              <div className="flex flex-row gap-[50px] dark:text-main-light dark:bg-main-dark">
                {details.clotheType=== "Buzo"&& (
                  <div className="flex flex-row gap-[50px] dark:text-main-light dark:bg-main-dark">
                  <div className="flex flex-row gap-[50px] dark:text-main-light dark:bg-main-dark">
                  <div>
                    <div className="text-[25px] mt-[10px] p-8 font-bold">
                      INSTRUCCIONES DE LAVADO
                    </div>
                    <ul className="grid-cols-2 mt-[25px]">
                      <li className="flex flex-row mt-[10px]">
                        <MdNotInterested className="w-[30px] h-[30px] mr-[10px]" />
                        No usar blanqueador
                      </li>
                      <li className="flex flex-row mt-[10px]">
                        <MdNotInterested className="w-[30px] h-[30px] mr-[10px]" />
                        No lavar en seco
                      </li>
                      <li className="flex flex-row mt-[10px]">
                        <GiWashingMachine className="w-[30px] h-[30px] mr-[10px]" />
                        Lavar máquina en temperatura fría
                      </li>
                      <li className="flex flex-row mt-[10px]">
                        <MdNotInterested className="w-[30px] h-[30px] mr-[10px]" />
                        No utilizar secadora{" "}
                      </li>
                      <li className="flex flex-row mt-[10px]">
                        <MdIron className="w-[30px] h-[30px] mr-[10px]" />
                        Planchar a temperatura baja{" "}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-[25px] mt-[10px] w-[550px] p-8 font-bold">
                      INFORMACIÓN ADICIONAL SOBRE EL CUIDADO
                    </div>
                    <ul className="flex flex-col ml-[20px] gap-[20px]">
                      <li className="list-disc">Usar únicamente detergente suave</li>
                      <li className="list-disc">Lavar al revés con colores similares</li>
                    </ul>
                  </div>
                </div>
                </div>
                )}
                {details.clotheType === "Camiseta" &&(
                  <div className="flex flex-row gap-[50px] dark:text-main-light dark:bg-main-dark">
                <div>
                  <div className="text-[25px] mt-[10px] p-8 font-bold">
                    INSTRUCCIONES DE LAVADO
                  </div>
                  <ul className="grid-cols-2 mt-[25px]">
                    <li className="flex flex-row mt-[10px]">
                      <MdNotInterested className="w-[30px] h-[30px] mr-[10px]" />
                      No usar blanqueador
                    </li>
                    <li className="flex flex-row mt-[10px]">
                      <MdNotInterested className="w-[30px] h-[30px] mr-[10px]" />
                      No lavar en seco
                    </li>
                    <li className="flex flex-row mt-[10px]">
                      <GiWashingMachine className="w-[30px] h-[30px] mr-[10px]" />
                      Lavar máquina en temperatura fría
                    </li>
                    <li className="flex flex-row mt-[10px]">
                      <MdNotInterested className="w-[30px] h-[30px] mr-[10px]" />
                      No utilizar secadora{" "}
                    </li>
                    <li className="flex flex-row mt-[10px]">
                      <MdIron className="w-[30px] h-[30px] mr-[10px]" />
                      Planchar a temperatura baja{" "}
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-[25px] mt-[10px] w-[550px] p-8 font-bold">
                    INFORMACIÓN ADICIONAL SOBRE EL CUIDADO
                  </div>
                  <ul className="flex flex-col ml-[20px] gap-[20px]">
                    <li className="list-disc">No usar suavizante</li>
                    <li className="list-disc">Lavar y planchar al revés</li>
                    <li className="list-disc">Retirar inmediatamente</li>
                    <li className="list-disc">Secar en tendedero</li>
                  </ul>
                </div>
                </div>)}
                {details.clotheType === "Short" &&(
                  <div className="flex flex-row gap-[50px] dark:text-main-light dark:bg-main-dark">
                <div>
                  <div className="text-[25px] mt-[10px] p-8 font-bold">
                    INSTRUCCIONES DE LAVADO
                  </div>
                  <ul className="grid-cols-2 mt-[25px]">
                    <li className="flex flex-row mt-[10px]">
                      <MdNotInterested className="w-[30px] h-[30px] mr-[10px]" />
                      No usar blanqueador
                    </li>
                    <li className="flex flex-row mt-[10px]">
                      <MdNotInterested className="w-[30px] h-[30px] mr-[10px]" />
                      No lavar en seco
                    </li>
                    <li className="flex flex-row mt-[10px]">
                      <GiWashingMachine className="w-[30px] h-[30px] mr-[10px]" />
                      Lavar máquina en temperatura fría
                    </li>
                    <li className="flex flex-row mt-[10px]">
                      <MdNotInterested className="w-[30px] h-[30px] mr-[10px]" />
                      No utilizar secadora{" "}
                    </li>
                    <li className="flex flex-row mt-[10px]">
                      <MdIron className="w-[30px] h-[30px] mr-[10px]" />
                      Planchar a temperatura baja{" "}
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-[25px] mt-[10px] w-[550px] p-8 font-bold">
                    INFORMACIÓN ADICIONAL SOBRE EL CUIDADO
                  </div>
                  <ul className="flex flex-col ml-[20px] gap-[20px]">
                    <li className="list-disc">No usar suavizante</li>
                    <li className="list-disc">Lavar y planchar al revés</li>
                    <li className="list-disc">Retirar inmediatamente</li>
                    <li className="list-disc">Secar en tendedero</li>
                  </ul>
                </div>
                </div>)}
                
              </div>)
                
              
            }
          </li>
        )}
        <li className="text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b flex flex-col gap-[5px] w-full  dark:bg-main-dark">
          <div className="flex flex-row p-4 font-bold dark:text-main-light dark:bg-main-dark">
            Detalles{" "}
            <button onClick={(e) => handleClick(e)}>
              {desplegable === false ? <VscChevronDown /> : <VscChevronUp />}
            </button>{" "}
          </div>
          {desplegable !== false && (
            <div className="dark:text-main-light dark:bg-main-dark">
              {details.clotheType === "Camiseta" && (
                <div className="flex flex-row gap-[30px]">
                  <div className="gap-[5px]">
                    <ul className="flex flex-col gap-[15px]">
                      <li className="list-disc">Corte ajustado</li>
                      <li className="list-disc">Cuello redondo acanalado</li>
                      <li className="list-disc">
                        Tejido de punto doble 100 % poliéster reciclado
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-[15px]">
                      <li className="list-disc">
                        Tecnología de absorción AEROREADY
                      </li>
                      <li className="list-disc">
                        Paneles de malla en los costados
                      </li>
                      <li className="list-disc">Puños acanalados</li>
                    </ul>
                  </div>
                </div>
              )}
              {details.clotheType === "Buzo" && (
                <div className="flex flex-row gap-[30px]">
                  <div className="gap-[5px]">
                    <ul className="flex flex-col gap-[15px]">
                      <li className="list-disc">Ajuste clásico</li>
                      <li className="list-disc">Capucha con cordón de ajuste</li>
                      <li className="list-disc">
                      Felpa francesa 70 % algodón, 30 % poliéster reciclado
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-[15px]">
                      <li className="list-disc">
                      Bolsillo canguro
                      </li>
                      <li className="list-disc">
                      Puños de las mangas y dobladillo ajustados
                      </li>
                      <li className="list-disc">Puños acanalados</li>
                    </ul>
                  </div>
                </div>
              )}
              {details.clotheType === "Short" && (
                <div className="flex flex-row gap-[30px]">
                  <div className="gap-[5px]">
                    <ul className="flex flex-col gap-[15px]">
                      <li className="list-disc">
                        Ajuste clásico con tiro medio
                      </li>
                      <li className="list-disc">
                        Cintura elástica con cordón regulable
                      </li>
                      <li className="list-disc">
                        Tejido de punto doble 100 % poliéster reciclado
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-[15px]">
                      <li className="list-disc">
                        Tecnología de absorción AEROREADY
                      </li>
                      <li className="list-disc">
                        Escudo de la Selección bordado
                      </li>
                      <li className="list-disc">
                        Color del artículo:{color.color}
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {details.clotheType === "Pelota" && (
                <div className="flex flex-row gap-[30px]">
                  <div className="gap-[5px]">
                    <ul className="flex flex-col gap-[15px]">
                      <li className="list-disc">Exterior 100 % TPU</li>
                      <li className="list-disc">Cámara de butilo</li>
                      <li className="list-disc">Exterior cosido a máquina</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="flex flex-col gap-[15px]">
                      <li className="list-disc">Requiere ser inflada</li>
                      <li className="list-disc">
                        Color del artículo:{color.color}
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SelectoresProduct;