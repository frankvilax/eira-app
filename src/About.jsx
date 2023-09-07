import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="aboutStructure">
        <div className="leftSection"></div>
        <div className="aboutContent">
          <p className="subject">. sobre / about</p>
          <hr className="separator" />

          <div className="text">
            <div className="curriculum">
              <p className="person">Filipa Moreira</p>
              <div className="location">
                <p>Loures - Portugal, 1993</p>
              </div>
              <div className="resumeProjects">
                <p>2021 | atelier EIRA (fundadora) </p>
              </div>

              <div className="resumeProjects">
                {" "}
                <p>
                  2021 | Curso de Pós-Graduação de Direito do Urbanismo e da
                  Habitação
                  <div className="resumeProjectsLocation">
                    {" "}
                    [Instituto de Ciências Jurídico-Políticas – Universidade de
                    Lisboa]
                  </div>
                </p>
              </div>
              <div className="resumeProjects">
                <p>2018-2020 | Grupo Norma - Arquitectura e Construção</p>
              </div>
              <div className="resumeProjects">
                {" "}
                <p>
                  2011-2018 | Mestrado Integrado em Arquitectura
                  <div className="resumeProjectsLocation">
                    {" "}
                    [Faculdade de Arquitectura – Universidade de Lisboa]
                  </div>
                </p>
              </div>
              <div className="resumeProjects">
                {" "}
                <p>
                  2014-2015 | Programa de Intercâmbio Erasmus
                  <div className="resumeProjectsLocation">
                    {" "}
                    [Scuola di Architettura e Società - Politecnico di Milano]
                  </div>
                </p>
              </div>
              <div className="resumeProjects">
                {" "}
                <p>
                  2008-2011 | Curso Artístico Especializado em Design de Produto
                  <div className="resumeProjectsLocation">
                    {" "}
                    [Escola Secundária Artística António Arroio]
                  </div>
                </p>
              </div>
              <hr />
              <div className="colaboration">
                <p className="colaborationName">
                  JOAOMOREIRARQUITETOS
                  <div className="colaborationSocial">
                    <a
                      className="colaborationSocial"
                      href="https://www.joaomoreirarquitetos.pt"
                    >
                      www.joaomoreirarquitetos.pt
                    </a>
                    <br />
                    <a
                      className="colaborationSocial"
                      href="https://www.instagram.com/joaomoreirarquitetos"
                    >
                      www.instagram.com/joaomoreirarquitetos
                    </a>
                  </div>
                </p>
              </div>
              <div className="colaboration">
                <p className="colaborationName">
                  A-CAL
                  <div className="colaborationSocial">
                    {" "}
                    <a
                      className="colaborationSocial"
                      href="https://www.a-cal.pt"
                    >
                      www.a-cal.pt
                    </a>
                    <br />
                    <a
                      className="colaborationSocial"
                      href="https://www.instagram.com/a.cal_slowliving"
                    >
                      www.instagram.com/a.cal_slowliving{" "}
                    </a>
                  </div>
                </p>
              </div>
              <div className="colaboration">
                <p className="colaborationName">JOÃO JANEIRO PEREIRA</p>
              </div>
            </div>
            <div className="resume">
              <div className="resumePortuguese">
                <p>
                  O atelier Eira, fundado em 2021 por Filipa Moreira, surge na
                  procura de uma identidade pessoal que reflita as diversas
                  influências adquiridas.
                </p>

                <p>
                  Este espaço foi criado para permitir uma abordagem mais
                  simples e pessoal da arquitetura. Assim como numa eira, depois
                  de colhidas as ideias, começa o processo de separar a
                  informação essencial dos detritos, de maneira a chegar a uma
                  proposta que vá de encontro às espectativas concebidas para
                  cada projeto. Cumprindo também uma função social, de ligação
                  entre o trabalho técnico e o sonho.
                </p>
                <p>
                  Com raízes em trás-os-montes, vivência da cidade de Lisboa e
                  formação no Alentejo, o atelier Eira é um atelier
                  multidisciplinar, com diversas camadas de aprendizagem.
                </p>
                <p>
                  Trabalhar no Alentejo, numa zona urbana, mas muito perto de
                  zonas rurais permitiu o contacto com as várias realidades da
                  arquitectura e o desenvolvimento de projectos nas mais
                  variadas vertentes. Com essa experiência, destaca-se a
                  especialização de projectos com uma vertente agrícola, como é
                  o caso do lagar, no agroturismo ou nos projectos mais
                  complexos da cannábis para fins medicinais.
                </p>
                <p>
                  A arquitectura não deve ser elitista e nesse sentido, uma das
                  grandes preocupações deste atelier é a arquitetura de
                  qualidade para todos. A habitação é um dos projectos mais
                  desafiantes e gratificantes de conceber. Cada projecto é único
                  e deve reflectir o conhecimento dos valores presentes e
                  apresentados.
                </p>
              </div>
              <div className="resumeEnglish">
                <p>
                  Atelier Eira, founded in 2021 by Filipa Moreira, appears in
                  the search for a personal identity that reflects the various
                  influences acquired.
                </p>

                <p>
                  This space was created to allow for a simpler and more
                  personal approach to architecture. Just like on a threshing
                  floor, after collecting the ideas, the process of separating
                  essential information from the debris begins, in order to
                  arrive at a proposal that meets the expectations conceived for
                  each project. It also fulfills a social function, as a link
                  between technical work and dreams.
                </p>
                <p>
                  With roots in Tras-os-Montes, living in the city of Lisbon and
                  training in Alentejo, Atelier Eira is, without a doubt, a
                  multidisciplinary atelier, with several layers of learning.
                </p>
                <p>
                  Working in Alentejo, in an urban area, but very close to rural
                  areas, allowed contact with the various realities of
                  architecture and the development of projects in the most
                  varied aspects. With this experience, we highlight the
                  specialization of projects with an agricultural aspect, such
                  as the mill, in agrotourism or in the more complex projects of
                  cannabis for medicinal purposes.
                </p>
                <p>
                  Architecture should not be elitist and in this sense, one of
                  the main concerns of this studio is quality architecture for
                  everyone. Housing is one of the most challenging and rewarding
                  projects to design. Each project is unique and must reflect
                  the knowledge of the present and presented values.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightSection"></div>
      </div>
    </>
  );
};

export default About;
