import React from "react";
import "./Home.css";
import { signInWithGoogle } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import QuestNavbar from "../Components/QuestNavbar";

function Home() {
  return (
    <div>
      <QuestNavbar />

      <div className="bg-image">
        <div>
          <h1>QuestBoard</h1>
          <h1>By HS Students, for HS Students</h1>
        </div>
      </div>

      <section className="bg-light text-dark pt-5 text-center">
        <div className="container">
          <div className="d-flex">
            <div>
              <h3>
                What is <span className="text-primary">QuestBoard</span>?
              </h3>
              <p className="text-sm-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                neque suscipit, accusantium nemo eum et nesciunt, consequuntur
                reprehenderit earum facere reiciendis non, quidem a beatae.
                Accusamus tenetur officiis fugit obcaecati?
              </p>
            </div>
            <div>
              <h3>Key Features</h3>
              <p className="text-sm-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                neque suscipit, accusantium nemo eum et nesciunt, consequuntur
                reprehenderit earum facere reiciendis non, quidem a beatae.
                Accusamus tenetur officiis fugit obcaecati?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-globe"></i>
                  </div>
                  <h3 className="card-title mb-3">Organization</h3>
                  <p className="card-text text-sm-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat sunt quasi voluptate ullam a dicta quidem
                    repudiandae enim, quae, error, aliquid cupiditate pariatur
                    libero! Dolores provident quas eos assumenda nostrum
                    excepturi nobis sequi perspiciatis neque rem aliquid eveniet
                    quibusdam dolor rerum repellendus, reiciendis, alias esse
                    modi voluptas, mollitia suscipit consequatur!
                  </p>
                  {/* HERE IS THE LOGIN EXAMPLE. */}
                  <button
                    onClick={signInWithGoogle}
                    className="btn btn-success"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card bg-light text-dark">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-pencil"></i>
                  </div>
                  <h3 className="card-title mb-3">Student</h3>
                  <p className="card-text text-sm-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat sunt quasi voluptate ullam a dicta quidem
                    repudiandae enim, quae, error, aliquid cupiditate pariatur
                    libero! Dolores provident quas eos assumenda nostrum
                    excepturi nobis sequi perspiciatis neque rem aliquid eveniet
                    quibusdam dolor rerum repellendus, reiciendis, alias esse
                    modi voluptas, mollitia suscipit consequatur!
                  </p>
                  {/* TODO: MAKE THIS WORK JUST LIKE THE SIGNIN BUTTON ABOVE. */}
                  <a href="#" className="btn btn-success">
                    Create Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5 bg-primary">
        <p className="text-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ut
          provident minus ullam aperiam, nemo, officiis quod repudiandae sunt
          repellat reiciendis deserunt impedit? Quis adipisci soluta illo ipsam
          explicabo perspiciatis.
        </p>
      </section>
    </div>
  );
}

export default Home;
