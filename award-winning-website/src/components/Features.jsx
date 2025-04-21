import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div id="models"className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div id="reactors" className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
              <p className="relative z-20">Модельді көру</p>

          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10 ">
        <div className="px-5 py-32">
          <p className="items-center font-circular-web text-center text-lg text-blue-50">
            Атом электр станциясы
          </p>
          <p className="max-w font-circular-web text-lg text-blue-50 opacity-50">
            Атом электр станциясы – бұл басқарылатын ядролық реакция кезінде бөлінетін энергияны пайдалана отырып электр
            энергиясын өндіретін өнеркәсіптік кешен.
            АЭС-тің негізгі элементі – ядролық реактор, оның ішінде атом ядроларының бөліну реакциясы жүріп, электр
            энергиясын өндіруге қажетті жылу бөлінеді.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <a href="temp/ncp.html">
            <BentoCard
                src="videos/ncp.mp4"
                title={
                  <>
                    Атом электр станциясы
                  </>
                }
                description="Атом электр станциясы (АЭС) – бұл басқарылатын ядролық реакция кезінде бөлінетін жылу арқылы электр энергиясын өндіретін өндірістік кешен."
                isComingSoon
            />
          </a>

        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <a href="temp/coolingTower.html" target="_blank" rel="noopener noreferrer">
              <BentoCard
                  src="videos/CoolongTowerVideo.mp4"
                  title={
                    <>
                      Салқындату мұнарасы
                    </>
                  }
                  description="Градирня — бұл электр станциясында қызған суды қайта пайдалану алдында салқындатуға арналған мұнара."
                  isComingSoon
              />
            </a>
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <a href="temp/reactor.html">
              <BentoCard
                  src="videos/Reactor.mp4"

                  title={
                    <>
                      Ядорлық реактор
                    </>
                  }
                  description="Ядролық реактор – бұл басқарылатын тізбекті ядролық реакция жүретін құрылғы, ол электр энергиясын өндіру үшін жылу бөледі."
                  isComingSoon
              />
            </a>
          </BentoTilt>


          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <a href="temp/steamTurbine.html">
              <BentoCard
                  src="videos/steamTurbine.mp4"
                  title={
                    <>
                      Турбина залы
                    </>
                  }
                  description="Турбина залы – бұл электр станциясындағы турбиналар мен генераторлар орналасқан кең ғимарат, онда жылу энергиясы механикалық және электр энергиясына айналады. Электр өндірудің негізгі процесі осы жерде жүзеге асады."
                  isComingSoon
              />
            </a>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <a href="temp/reactorCore.html" target="_blank" rel="noopener noreferrer">
              <div className="flex size-full flex-col justify-between  ">
                <img
                    src="/img/ncpCore.webp" // замени на актуальный путь к картинке
                    alt="Image"
                />
                <h1 className="absolute  inset-1 p-5 justify-start text-white bento-title special-font ">
                  Реактордың белсенді аймағы
                </h1>
              </div>

            </a>

          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <a href="temp/electicGenerator.html" target="_blank">
              <div className="flex size-full flex-col justify-between  ">
                <img
                    src="/img/generator.webp" // замени на актуальный путь к картинке
                    alt="Image"
                />
                <h1 className="absolute  inset-1 p-5 justify-start text-white bento-title special-font ">
                  Электр генераторлары
                </h1>
              </div>
            </a>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <a href="temp/turbine.html" target="_blank">
              <div className="flex size-full flex-col justify-between  ">
                <img
                    src="/img/turbine.webp" // замени на актуальный путь к картинке
                    alt="Image"
                />
                <h1 className="absolute  inset-1 p-5 justify-start text-white bento-title special-font ">
                  Бу турбинасы
                </h1>
              </div>
            </a>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <a href="temp/fuelAssembly.html" target="_blank">
              <div className="flex size-full flex-col justify-between   ">
                <img
                    src="/img/fuelAssembly.jpg" // замени на актуальный путь к картинке
                    alt="Image"
                />
                <h1 className="absolute  inset-1 p-5 justify-start text-white bento-title special-font ">
                  Ядролық отын жинағы
                </h1>
              </div>
            </a>
          </BentoTilt>


        </div>
      </div>
    </section>
);

export default Features;
