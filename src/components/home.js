import React from 'react';
import '../css/home.css'
import '../css/bootstrap.min.css'
import { Link } from "react-router-dom";
function Home() {
  return (
    <div class="wrapper">
      <section class="hero">
        <header>
          <div class="container">
            <nav class="navbar navbar-light navbar-toggleable-sm">
              <a href="#" class="navbar-brand mb-0"><span class="b">G</span><span class="r">D</span><span class="y">S</span><span class="g">C</span>-UCU</a>

              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#headerNav" aria-controls="headerNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div id="headerNav" class="collapse navbar-collapse justify-content-end">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#sec-testimonials">About Us</a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#sec-contact">Contact</a>
                  </li>
                  <li class="nav-item">
                    <Link to="../signup" class="nav-link">Create an account</Link> 
                  </li>

                  <li class="nav-item">
                    <span><Link to="../login" class="nav-link">Login</Link> </span>
                  </li>

                  
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <div class="jumbotron jumbotron-fluid mb-0">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-md-10 col-lg-6">
                <h1 class="display-5">The Coolest Co-Working Space in Prague</h1>

                <p class="lead">Where you choose to work has impact on your productivity and creativity. It also says a lot about your business. We are the right office space.</p>

                <p class="lead">
                  <a class="btn btn-primary btn-lg" href="#sec-pricing" role="button">Reserve Your Spot</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>
    </div>

  );
}

export default Home;