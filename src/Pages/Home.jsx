import React from 'react';
import "./Home.css";
import QuestNavbar from '../Components/QuestNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithGoogle } from "../firebase";


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
                <div class="d-flex">
                    <div>
                        <h3>What is <span class="text-primary">QuestBoard</span>?</h3>
                            <p class="text-sm-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi neque suscipit, accusantium nemo eum et nesciunt, consequuntur reprehenderit earum facere reiciendis non, quidem a beatae. Accusamus tenetur officiis fugit obcaecati?
                            </p>
                    </div>
                    <div>
                        <h3>Key Features</h3>
                        <p class="text-sm-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi neque suscipit, accusantium nemo eum et nesciunt, consequuntur reprehenderit earum facere reiciendis non, quidem a beatae. Accusamus tenetur officiis fugit obcaecati?
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="p-5">
            <div class="container">
                <div class="row text-center g-4">
                    <div class="col-md">
                        <div class="card bg-dark text-light">
                            <div class="card-body text-center">
                                <div class="h1 mb-3">
                                    <i class="bi bi-globe"></i>
                                </div>
                                <h3 class="card-title mb-3">
                                    Organization
                                </h3>
                                <p class="card-text text-sm-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sunt quasi voluptate ullam a dicta quidem repudiandae enim, quae, error, aliquid cupiditate pariatur libero! Dolores provident quas eos assumenda nostrum excepturi nobis sequi perspiciatis neque rem aliquid eveniet quibusdam dolor rerum repellendus, reiciendis, alias esse modi voluptas, mollitia suscipit consequatur!
                                </p>
                                <button onClick={signInWithGoogle} className="btn btn-success">Create Account</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card bg-light text-dark">
                            <div class="card-body text-center">
                                <div class="h1 mb-3">
                                    <i class="bi bi-pencil"></i>
                                </div>
                                <h3 class="card-title mb-3">
                                    Student
                                </h3>
                                <p class="card-text text-sm-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sunt quasi voluptate ullam a dicta quidem repudiandae enim, quae, error, aliquid cupiditate pariatur libero! Dolores provident quas eos assumenda nostrum excepturi nobis sequi perspiciatis neque rem aliquid eveniet quibusdam dolor rerum repellendus, reiciendis, alias esse modi voluptas, mollitia suscipit consequatur!
                                </p>
                                <button onClick={signInWithGoogle} className="btn btn-success">Create Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="p-5 bg-primary">
            <p class="text-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid ut provident minus ullam aperiam, nemo, officiis quod repudiandae sunt repellat reiciendis deserunt impedit? Quis adipisci soluta illo ipsam explicabo perspiciatis.</p>
        </section>

        

    </div>
    )
}

export default Home
