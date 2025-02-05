import React, { useState } from 'react'
import Ratting from '../components/Ratting';


const reviewtitle = "Add a Review";

let ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb", name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2024 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb", name: "Morgana Cailot",
        date: "Posted on Jun 25, 2024 at 4:10 pm",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Client thumb", name: "Telford Bois",
        date: "Posted on Jun 10, 2024 at 2:12 pm",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2024 at 9:32 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];



const Review = () => {
    const [reviewShow, setReviewShow] = useState(true);
    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className='desc' onClick={() => setReviewShow(!reviewShow)}>Description</li>
                <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Reviews 4</li>
            </ul>

            {/* desc & review content */}
            <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                {/* for review showing */}
                <div className="review-showing">
                    <ul className="content lab-ul">
                        {
                            ReviewList.map((review, i) => (
                                <li key={i}>
                                    <div className='post-thumb'>
                                        <img src={review.imgUrl} alt="" />
                                    </div>
                                    <div className="post-content">
                                        <div className="entry-meta">
                                            <div className="posted-on">
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                        </div>
                                        <div className="entry-content">
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                    {/* add review field */}
                    <div className="cilent-review">
                        <div className="review-form">
                            <div className="review-title">
                                <h5>{reviewtitle}</h5>
                            </div>

                            <form action="action" className='row'>
                                <div className="col-md-4 col-12">
                                    <input type="text" name='name' id='name' placeholder='Full Name *' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <input type="email" name='email' id='email' placeholder='Your Email *' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="rating">
                                        <span className='me-2'>Your Rating</span>
                                        <Ratting />
                                    </div>
                                </div>
                                <div className="col-md-12 col-12">
                                    <textarea name="message" id="message" rows='8' placeholder='Type here massage'></textarea>
                                </div>
                                <div className="col-12">
                                    <button type='submit' className='default-button'>
                                        <span>Submit Review</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* for description showing */}
                <div className="description">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quibusdam in saepe consequatur. Esse quasi nesciunt vero ratione.
                        Minima iusto aliquid suscipit similique, doloribus ex quidem cumque deleniti laudantium dolore consequatur magni nobis quae rerum beatae eius cum atque?
                        Dolore sequi perferendis itaque atque at.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quibusdam in saepe consequatur. Esse quasi nesciunt vero ratione.
                        Minima iusto aliquid suscipit similique, doloribus ex quidem cumque deleniti laudantium dolore consequatur magni nobis quae rerum beatae eius cum atque?
                        Dolore sequi perferendis itaque atque at.
                    </p>
                    <div className="post-item">
                        <div className="post-thumb">
                            <img src="/src/assets/images/shop/01.jpg" alt="" />
                        </div>
                        <div className="post-content">
                            <ul className="lab-ul">
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, ratione.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, ratione.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, ratione.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, ratione.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, ratione.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, ratione.</li>
                            </ul>
                        </div>
                        <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quibusdam in saepe consequatur. Esse quasi nesciunt vero ratione.
                                Minima iusto aliquid suscipit similique, doloribus ex quidem cumque deleniti laudantium dolore consequatur magni nobis quae rerum beatae eius cum atque?
                                Dolore sequi perferendis itaque atque at.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quibusdam in saepe consequatur. Esse quasi nesciunt vero ratione.
                                Minima iusto aliquid suscipit similique, doloribus ex quidem cumque deleniti laudantium dolore consequatur magni nobis quae rerum beatae eius cum atque?
                                Dolore sequi perferendis itaque atque at.
                            </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Review

