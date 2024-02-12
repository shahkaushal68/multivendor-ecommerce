import Header from "../../components/common/Header"
import Footer from "../../components/common/Footer"
import { whyChooseData } from "../../data/customData"

const Home = () => {
    return (
        <>
            <div>
                {/*Main Navigation*/}
                <Header />
                {/* Products */}
                <section>
                    <div className="container my-5">
                        <header className="mb-4">
                            <h3>New products</h3>
                        </header>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                                <div className="card w-100 my-2 shadow-2-strong">
                                    <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/1.webp" className="card-img-top" style={{ aspectRatio: '1 / 1' }} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">GoPro HERO6 4K Action Camera - Black</h5>
                                        <p className="card-text">$790.50</p>
                                        <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                                            <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                                            <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                                <div className="card w-100 my-2 shadow-2-strong">
                                    <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/2.webp" className="card-img-top" style={{ aspectRatio: '1 / 1' }} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">Canon camera 20x zoom, Black color EOS 2000</h5>
                                        <p className="card-text">$320.00</p>
                                        <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                                            <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                                            <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                                <div className="card w-100 my-2 shadow-2-strong">
                                    <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/3.webp" className="card-img-top" style={{ aspectRatio: '1 / 1' }} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">Xiaomi Redmi 8 Original Global Version 4GB</h5>
                                        <p className="card-text">$120.00</p>
                                        <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                                            <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                                            <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                                <div className="card w-100 my-2 shadow-2-strong">
                                    <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/4.webp" className="card-img-top" style={{ aspectRatio: '1 / 1' }} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">Apple iPhone 12 Pro 6.1 RAM 6GB 512GB Unlocked</h5>
                                        <p className="card-text">$120.00</p>
                                        <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                                            <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                                            <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                                <div className="card w-100 my-2 shadow-2-strong">
                                    <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp" className="card-img-top" style={{ aspectRatio: '1 / 1' }} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">Apple Watch Series 1 Sport Case 38mm Black</h5>
                                        <p className="card-text">$790.50</p>
                                        <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                                            <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                                            <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                                <div className="card w-100 my-2 shadow-2-strong">
                                    <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/6.webp" className="card-img-top" style={{ aspectRatio: '1 / 1' }} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">T-shirts with multiple colors, for men and lady</h5>
                                        <p className="card-text">$120.00</p>
                                        <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                                            <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                                            <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                                <div className="card w-100 my-2 shadow-2-strong">
                                    <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp" className="card-img-top" style={{ aspectRatio: '1 / 1' }} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">Gaming Headset 32db Blackbuilt in mic</h5>
                                        <p className="card-text">$99.50</p>
                                        <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                                            <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                                            <a href="#!" className="btn btn-light border icon-hover px-2 pt-2"><i className="fas fa-heart fa-lg text-secondary px-1" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
                                <div className="card w-100 my-2 shadow-2-strong">
                                    <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp" className="card-img-top" style={{ aspectRatio: '1 / 1' }} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">T-shirts with multiple colors, for men and lady</h5>
                                        <p className="card-text">$120.00</p>
                                        <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                                            <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                                            <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Products */}
                {/* Feature */}
                <section className="mt-5" style={{ backgroundColor: '#f5f5f5' }}>
                    <div className="container text-dark pt-3">
                        <header className="pt-4 pb-3">
                            <h3>Why choose us</h3>
                        </header>
                        <div className="row mb-4">
                            {
                                whyChooseData?.map((whyChooseItem, whyChooseIndex) => {
                                    return (
                                        <div className="col-lg-4 col-md-6" key={whyChooseIndex}>
                                            <figure className="d-flex align-items-center mb-4">
                                                <span className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                                                    <i className={`fas ${whyChooseItem?.icon} fa-2x fa-fw text-primary floating`} />
                                                </span>
                                                <figcaption className="info">
                                                    <h6 className="title">{whyChooseItem?.title}</h6>
                                                    <p>{whyChooseItem?.description}</p>
                                                </figcaption>
                                            </figure>
                                            {/* itemside // */}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* container end.// */}
                </section>
                {/* Feature */}
                {/* Blog */}
                <section className="mt-5 mb-4">
                    <div className="container text-dark">
                        <header className="mb-4">
                            <h3>Blog posts</h3>
                        </header>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <article>
                                    <a href="#" className="img-fluid">
                                        <img className="rounded w-100" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/1.webp" style={{ objectFit: 'cover' }} height={160} />
                                    </a>
                                    <div className="mt-2 text-muted small d-block mb-1">
                                        <span>
                                            <i className="fa fa-calendar-alt fa-sm" />
                                            23.12.2022
                                        </span>
                                        <a href="#"><h6 className="text-dark">How to promote brands</h6></a>
                                        <p>When you enter into any new area of science, you almost reach</p>
                                    </div>
                                </article>
                            </div>
                            {/* col.// */}
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <article>
                                    <a href="#" className="img-fluid">
                                        <img className="rounded w-100" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/2.webp" style={{ objectFit: 'cover' }} height={160} />
                                    </a>
                                    <div className="mt-2 text-muted small d-block mb-1">
                                        <span>
                                            <i className="fa fa-calendar-alt fa-sm" />
                                            13.12.2022
                                        </span>
                                        <a href="#"><h6 className="text-dark">How we handle shipping</h6></a>
                                        <p>When you enter into any new area of science, you almost reach</p>
                                    </div>
                                </article>
                            </div>
                            {/* col.// */}
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <article>
                                    <a href="#" className="img-fluid">
                                        <img className="rounded w-100" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/3.webp" style={{ objectFit: 'cover' }} height={160} />
                                    </a>
                                    <div className="mt-2 text-muted small d-block mb-1">
                                        <span>
                                            <i className="fa fa-calendar-alt fa-sm" />
                                            25.11.2022
                                        </span>
                                        <a href="#"><h6 className="text-dark">How to promote brands</h6></a>
                                        <p>When you enter into any new area of science, you almost reach</p>
                                    </div>
                                </article>
                            </div>
                            {/* col.// */}
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <article>
                                    <a href="#" className="img-fluid">
                                        <img className="rounded w-100" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/4.webp" style={{ objectFit: 'cover' }} height={160} />
                                    </a>
                                    <div className="mt-2 text-muted small d-block mb-1">
                                        <span>
                                            <i className="fa fa-calendar-alt fa-sm" />
                                            03.09.2022
                                        </span>
                                        <a href="#"><h6 className="text-dark">Success story of sellers</h6></a>
                                        <p>When you enter into any new area of science, you almost reach</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Blog */}
                {/* Footer */}
                <Footer />
                {/* Footer */}
            </div>

        </>
    )
}

export default Home
