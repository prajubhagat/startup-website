class SpecialHeader extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark px-5  py-lg-0 sticky-top shadow-sm">
            <a href="index.html" class="navbar-brand p-0">
              <img src="img/logoNexGen.png" alt="company logo" style="height: 74px;">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href="index.html" class="nav-item nav-link active">Home</a>
                    <a href="about.html" class="nav-item nav-link">About</a>
                    <div class="nav-item dropdown">
                        <a href="service.html" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                        <div class="dropdown-menu m-0">
                            <a href="./services/cyber-security.html" class="dropdown-item">Cyber Security</a>
                            <a href="./services/data-analyst.html" class="dropdown-item">Data Analyst</a>
                            <a href="./services/web-development.html" class="dropdown-item">Web Development</a>
                            <a href="./services/app-development.html" class="dropdown-item">App Development</a>
                            <a href="./services/seo-optimization.html" class="dropdown-item">SEO Optimization</a>
                        </div>
                    </div>
                    <a href="feature.html" class="nav-item nav-link">Our features</a>
                    <a href="team.html" class="nav-item nav-link">Team Members</a>
                    <!-- <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                        <div class="dropdown-menu m-0">
                            <a href="blog.html" class="dropdown-item">Blog Grid</a>
                            <a href="detail.html" class="dropdown-item">Blog Detail</a>
                        </div>
                    </div> -->
                    <!--<div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu m-0">
                            <a href="price.html" class="dropdown-item">Pricing Plan</a>
                            <a href="feature.html" class="dropdown-item">Our features</a>
                            <a href="team.html" class="dropdown-item">Team Members</a>
                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                            <a href="quote.html" class="dropdown-item">Free Quote</a>
                        </div>
                    </div>-->
                    <a href="career.html" class="nav-item nav-link">Career</a>
                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                </div>
                <!-- <butaton type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton> -->
            </div>
        </nav>

    `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
       <div class="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
           <div class="container">
               <div class="row gx-5">
                   <div class="col-lg-4 col-md-6 footer-about">
                       <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                           <a href="index.html" class="navbar-brand">
                                <img src="img/logoNexGen.png" alt="company logo" style="height: 74px;">
                           </a>
                           <p class="mt-3 mb-4" style="color:#fff;">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
                           <form action="">
                               <div class="input-group">
                                   <input type="text" class="form-control border-white p-3" placeholder="Your Email">
                                   <button class="btn btn-dark">Sign Up</button>
                               </div>
                           </form>
                       </div>
                   </div>
                   <div class="col-lg-8 col-md-6">
                       <div class="row gx-5">
                           <div class="col-lg-4 col-md-12 pt-5 mb-5">
                               <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                   <h5 class="text-light mb-0">Get In Touch</h5>
                               </div>
                               <div class="d-flex mb-2">
                                   <i class="bi bi-geo-alt text-primary me-2"></i>
                                   <p class="mb-0">123 Street, New York, USA</p>
                               </div>
                               <div class="d-flex mb-2">
                                   <i class="bi bi-envelope-open text-primary me-2"></i>
                                   <p class="mb-0">info@example.com</p>
                               </div>
                               <div class="d-flex mb-2">
                                   <i class="bi bi-telephone text-primary me-2"></i>
                                   <p class="mb-0">+012 345 67890</p>
                               </div>
                               <div class="d-flex mt-4">
                                   <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-twitter fw-normal"></i></a>
                                   <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-facebook-f fw-normal"></i></a>
                                   <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-linkedin-in fw-normal"></i></a>
                                   <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-instagram fw-normal"></i></a>
                                   <a class="btn btn-primary btn-square" href="#"><i class="fab fa-youtube fw-normal"></i></a>
                               </div>
                           </div>
                           <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                               <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                   <h5 class="text-light mb-0">Quick Links</h5>
                               </div>
                               <div class="link-animated d-flex flex-column justify-content-start">
                                   <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                   <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                                   <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Our Features</a>
                                   <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                                   <!-- <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a> -->
                                   <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Carees</a>
                                   <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                               </div>
                           </div>
                           <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                               <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                   <h5 class="text-light mb-0">Services</h5>
                               </div>
                               <div class="link-animated d-flex flex-column justify-content-start">
                                   <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Cyber Security</a>
                                   <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Data Analyst</a>
                                   <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Web Development</a>
                                   <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>App Development</a>
                                   <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>SEO Optimization</a>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       <div class="container-fluid text-white" style="background: #000;">
           <div class="container text-center">
               <div class="row justify-content-end">
                   <div class="col-lg-8 col-md-6" style="padding-left:0px;">
                       <div class="d-flex align-items-center justify-content-center" style="height: 75px;">
                           <p class="mb-0">&copy; <a class="text-white border-bottom" href="#">2025 NexGen Business Solution</a>

                        <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                        <!-- Designed by <a class="text-white border-bottom" href="https://htmlcodex.com">HTML Codex</a></p> -->
                       </div>
                   </div>
               </div>
           </div>
       </div>

    `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)