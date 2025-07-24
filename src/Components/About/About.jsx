import React from 'react'
import photo from "./../../assets/recipes/بوكسات الكرم/وجبة بوكس مكس الجوكر .jpg"

export default function About() {
  return (
    <>
        <div className='grid grid-cols-2 px-8 md:px-14 lg:px-18'>
          <div> <img src={photo} alt="" /></div>
          <div>
            <h3 className='mb-6 text-xl font-bold '>المطعم يقدم</h3>
            <p className='text-amber-100 text-xl'>
              مطعم "كرم الشام" (Karam El Sham) هو مطعم متخصص في المأكولات السورية، ويقدم مجموعة متنوعة من الأطباق مثل الشاورما، المشويات، والبروستد، بالإضافة إلى المقبلات والسلطات والمشروبات. يشتهر المطعم بتقديم وجبات الشاورما العربية والسنجل، ووجبات البروستد، ووجبات الغربي مثل وجبة زنجر ووجبة كرسبي. كما يقدم المطعم عروضًا خاصة مثل صينية الاسود وصينية الابطال. 
            </p>
            <h3 className='mb-6 mt-10 text-xl font-bold '>ساعات العمل</h3>
            <p className='text-amber-100 text-xl'>
سبت - جمعة	06:00 ص-11:59 م
            </p>
          </div>

        </div>
    </>
  )
}
