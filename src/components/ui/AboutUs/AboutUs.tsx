import Image from "next/image";
import aboutImg from "../../../assets/images/about.png";
import iconImg1 from "../../../assets/images/icon-world.png";
import iconImg2 from "../../../assets/images/icon-walte.png";
import iconImg3 from "../../../assets/images/icon-star.png";
import iconImg4 from "../../../assets/images/icon-persentis.png";
import { Button } from "antd";

const AboutUs = () => {
  return (
    <>
      <section>
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-lg p-4 w-1/3">
              <Image
                style={{
                  maxWidth: "500px",
                  height: "auto",
                }}
                src={aboutImg}
                alt="img"
              />
            </div>
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">About us</h2>

              <h2>We Are The World Best Travel Agency Company Since 2000</h2>
              <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr{" "}
              </p>
              <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr{" "}
              </p>
              <a href="tour-search.html" className="btn btn_theme btn_md">
                <Button type="primary">Find tours</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
