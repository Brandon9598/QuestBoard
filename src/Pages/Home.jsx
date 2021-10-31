import React from 'react';
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithGoogle } from "../firebase";


function Home() {
    return (
    <div>

        <div className="bg-image">
            <div>
                <h1 className="top-text">QuestBoard</h1>
                <h1 className="top-text">By HS Students, for HS Students</h1>
            </div>
        </div>

        <section className="bg-light text-dark pt-5 text-center">
            <div className="container">
                <div class="d-flex">
                    <div>
                        <h3>What is <span class="text-primary">QuestBoard</span>?</h3>
                            <p className="text-sm-left">
                                QuestBoard is a website which gives high school students the freedom and ability to search for new opportunities to help bolster their experience before they graduate. Companies and various organizations can post their labor needs with ease, and students can sign on for them without having to go on an extensive search. With simply the click of a button, a student can sign on for a community service job, or even potentially sign on for a new part time job at a local restaraunt. These jobs are referred to as 'Quests', and can be found at the simple click of a button by navigating to 'The Board'. The possibilities are endless, and can save students valuable time that would otherwise be spent searching.
                            </p>
                    </div>
                    <div>
                        <h3>Key Features</h3>
                        <p className="text-sm-left">
                            The Board - A place where students can easily access and sign up for a list of various Quests/opportunities, and organizations can post them.
                            Simple UI - With a simple and easy to use User Interface, both organizations and students can connect with ease.
                            Account Page - A detailed list of various important facts alongside other information that students and organizations can put up, as well as a compiled log of all jobs/Quests completed and an estimated total amount of hours spent at work.
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
                                    An Organization account has the ability to post jobs on The Board, but cannot accept any. In order to create an Organization account, you must actively be representing an official Organization/Company (Meals on wheels, Chick fil a, etc.) within Warner Robins (As of writing this).
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
                                    Students are able to accept Quests and read keep track of their overall time spent working, but cannot post quests on The Board. So long as you attend High School within the Warner Robins area (as of writing this) and have permission from a parent/guardian, then you can create a Student Account.
                                </p>
                                <button onClick={signInWithGoogle} className="btn btn-success">Create Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        

    </div>
    )
}

export default Home
