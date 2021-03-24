import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import physics from '../../Assets/physics.png'
import literature from '../../Assets/literature.png'
import math from '../../Assets/math.png'
import economy from '../../Assets/economy.png'
import list from '../../Assets/list.png'
import programing from '../../Assets/programing.png'
import biology from '../../Assets/biology.png'
import language from '../../Assets/language.png'
import shape1 from '../../Assets/shape1.png'
import shape2 from '../../Assets/shape2.png'
import shape3 from '../../Assets/shape3.png'

SwiperCore.use([Navigation]);

function SubjectsList () {
    return (
        
        <div class="subjects">
            <slider class="subjects-list-container">
                
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}   
                >

                <SwiperSlide className = "subjects-list-class" id="subject"><img className="subject-img" src={list} alt="all"/><h1 className="subject-tilte">All</h1></SwiperSlide>
                <SwiperSlide className = "subjects-list-class" id="subject"><img className="subject-img"  src={math} alt="maths" /> <h1 className="subject-tilte">Maths</h1></SwiperSlide>
                <SwiperSlide className = "subjects-list-class" id="subject"><img className="subject-img"  src={physics} alt="physics" /><h1 className="subject-tilte">Physics</h1></SwiperSlide>
                <SwiperSlide className = "subjects-list-class" id="subject"><img className="subject-img-biology"  src={biology} alt="biology"/><h1 className="subject-tilte">Biology</h1></SwiperSlide>
                <SwiperSlide className = "subjects-list-class" id="subject"><img className="subject-img"  src={economy} alt="economy"/><h1 className="subject-tilte">Economy</h1></SwiperSlide>
                <SwiperSlide className = "subjects-list-class" id="subject"><img className="subject-img"  src={literature} alt="literature"/><h1 className="subject-tilte">Literature</h1></SwiperSlide>
                <SwiperSlide className = "subjects-list-class" id="subject"><img className="subject-img"  src={programing} alt="programing"/><h1 className="subject-tilte">Programing</h1></SwiperSlide>
                <SwiperSlide className = "subjects-list-class" id="subject"><img className="subject-img"  src={language} alt="programing"/><h1 className="subject-tilte">Language</h1></SwiperSlide>

            </Swiper>
        </slider>
        <div class="shape shapeAnimationOne l-10 t-60">
            <img src={shape1}  alt="Shape"/>
        </div>
        <div class="shape shapeAnimationTwo l-70 t-60">
            <img src={shape2}  alt="Shape"/>
        </div>
        <div class="shape shapeAnimationThree l-50 t-100">
            <img src={shape3} alt="Shape"/>
        </div> 
      </div>
    )
}

export default SubjectsList