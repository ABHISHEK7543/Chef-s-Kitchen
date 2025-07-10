import React from 'react'

const Cards = () => {

const data =[
  {
    
    "title": "Garlic Butter Rice",
    "img":  "https://imgs.search.brave.com/ZW4gw4Pw2GAg6B1bWSKpVV9aTZURP-19720Z97q09ks/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbWFu/ZGFzY29va2luLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wNS9HYXJsaWMt/QnV0dGVyLVJpY2Ut/UkNTUS01MDB4NTAw/LmpwZw",
    "description": "Buttery, garlicky rice — the perfect flavorful side.",
    "rate": 4.9,
    "chefName": "Nagi Nilsson"
  },
  {
    
    "title": "Classic Chicken Salad",
    "img": "https://imgs.search.brave.com/m2Zv2y4qgFPGMdk9Yh1oaJv1myX_fHO2pXUM4pGTU4g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zd2Vl/dHNhdm9yeWFuZHN0/ZXBoLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wMS9J/TUdfMDc0MS1zY2Fs/ZWQuanBn",
    "description": "Creamy chicken salad with celery and green onion.",
    "rate": 4.8,
    "chefName": "Holly Nilsson"
  },
  {
    
    "title": "The Best Chili Recipe",
    "img": "https://imgs.search.brave.com/mj-9aQ3x-M4ULvxGjOzY7XZJmtwYGzkysKckTDYvME8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VyaW91c2VhdHMu/Y29tL3RobWIvdjlo/aURtTTI0V3JfME9L/dVFvNHRGWVlMSFJj/PS8xNTAweDAvZmls/dGVyczpub191cHNj/YWxlKCk6bWF4X2J5/dGVzKDE1MDAwMCk6/c3RyaXBfaWNjKCkv/X19vcHRfX2Fib3V0/Y29tX19jb2V1c19f/cmVzb3VyY2VzX19j/b250ZW50X21pZ3Jh/dGlvbl9fc2VyaW91/c19lYXRzX19zZXJp/b3VzZWF0cy5jb21f/X2ltYWdlc19fMjAx/Nl9fMDFfXzIwMTUw/MTE3LWdhbWUtZGF5/LWNoaWxpLXJlY2lw/ZXMtcm91bmR1cC0w/OS1lMmI0YWNhZmM2/OTg0MTA3ODhhOTUw/YWRkYTM2MDI4Ny5q/cGc",
    "description": "Hearty ground beef & bean chili, rich in flavor.",
    "rate": 4.9,
    "chefName": "Holly Nilsson"
  },
  {
    "name": "Beef Stew",
    "title": "Homemade Beef Stew",
    "img": "https://imgs.search.brave.com/YjOszLKYb6rkLIHUFhZhK11wjLgshtOzUasfkDuN5Uk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQx/NDI4NzMyMi9waG90/by9oZWFsdGh5LXN0/aWNreS1iZWVmLXN0/ZXcuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUtGdkd2ODdP/YkhXOUhZQUNDTTE3/cld5Y251UGRNN1hE/ZFRqTUVBOWxYMTg9",
    "description": "Tender beef simmered with veggies in savory broth.",
    "rate": 4.8,
    "chefName": "Holly Nilsson"
  },
  {
    "name": "Easy Cabbage Rolls",
    "title": "Easy Cabbage Rolls",
    "img": "https://imgs.search.brave.com/fLPYFh8wtaru0s5lXJHQ9lL9abZkFnyS_rFmErl_nZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3BlbmR3aXRocGVu/bmllcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDIv/NFNRLUVhc3ktQ2Fi/YmFnZS1Sb2xscy1T/cGVuZFdpdGhQZW5u/aWVzLTIuanBn",
    "description": "Stuffed cabbage leaves with beef & rice in tomato sauce.",
    "rate": 4.9,
    "chefName": "Holly Nilsson"
  },
  {
    "name": "Baked Zucchini",
    "title": "Easy Baked Zucchini",
    "img": "https://imgs.search.brave.com/SvORlB_s8Qvrn1FvnKpX4S6lcNR1JNXN5NialrFVU6k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2lhbGxvemFmZmVy/YW5vLmNvbS9pbWFn/ZXMvMjgxLTI4MTEz/L0Jha2VkLVp1Y2No/aW5pXzEyMDB4ODAw/LmpwZw",
    "description": "Parmesan‑topped zucchini spears baked golden.",
    "rate": 4.7,
    "chefName": "Holly Nilsson"
  },
  {
    "name": "Cowboy Caviar",
    "title": "Fresh Cowboy Caviar",
    "img": "https://imgs.search.brave.com/uL3AZi4iTKNdL2v0Ltnf9x2ib640kr7W3zUdrHK6qKg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9jb3di/b3ktY2F2aWFyLWlu/ZGV4LTY2NjllZjEy/ZDM0MTEuanBnP2Ny/b3A9MC44OTF4dzox/LjAweGg7MC4wMDQ4/OXh3LDAmcmVzaXpl/PTEyMDA6Kg",
    "description": "Bright bean & veggie dip, perfect for potlucks.",
    "rate": 4.8,
    "chefName": "Samantha"
  },
  {
    "name": "Lemon Bars",
    "title": "Easy Lemon Bars",
    "img": "https://imgs.search.brave.com/W9dvgzV1pVSnRCRg2bMvwI1YBc6gZY1hlAAfjAdsaDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjaXBldGluZWF0/cy5jb20vdGFjaHlv/bi8yMDE2LzA0L0xl/bW9uLUJhcnNfMS0x/LmpwZw",
    "description": "Tangy lemon custard over a buttery shortbread crust.",
    "rate": 4.9,
    "chefName": "Melanie"
  },
  {
    
    "title": "Pull‑Apart Monkey Bread",
    "img": "https://imgs.search.brave.com/_iIRRHr7DGE3L-YqeCBvqB1LdiQPQB1u0Kf_tj2p1Gk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pd2Fz/aHlvdWRyeS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MTAvUHVsbC1BcGFy/dC1Nb25rZXktQnJl/YWQtMTItb2YtMTct/MTEwMHgxNjUwLmpw/Zw",
    "description": "Cinnamon‑sugar biscuit pieces drenched in buttery caramel.",
    "rate": 4.8,
    "chefName": "Ree Drummond"
  },
  {
    
    "title": "Perfect Pot Roast",
    "img": "https://imgs.search.brave.com/6KjZGYUVDjuz6cJwCzzsuW1g9XTKXcQ9sEMPzc0o4Xw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2ltcGx5c2F0ZWQu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzAyLzYtUG90/LVJvYXN0LTM5Yi0x/LVAyMDIwMDM5Lmpw/Zw",
    "description": "Tender chuck roast braised with carrots & onions.",
    "rate": 4.8,
    "chefName": "Ree Drummond"
  },
  {
    
    "title": "Crash Hot Potatoes",
    "img": "https://imgs.search.brave.com/Rrvs5AZg-UBOl4C1FSn1bBItupltEFhY8aG0dr_pIHw/rs:fit:860:0:0:0/g:ce/aHR0cDovL2Zhcm00/LnN0YXRpYy5mbGlj/a3IuY29tLzMzMzAv/MzIzNDg3OTAwNl82/ZWVjZjRhMmIxLmpw/Zw",
    "description": "Crispy smashed potatoes tossed with herbs & olive oil.",
    "rate": 4.7,
    "chefName": "Ree Drummond"
  },
  {
    
    "title": "Best Sloppy Joes",
    "img": "https://imgs.search.brave.com/nkO6-VsUshjZOkW7tFac0rDBNZ26631sLgTGB_byCs4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVm/b3JrZWRzcG9vbi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDYvYmVzdC1z/bG9wcHktam9lczMt/NzAweDEwNTAuanBn",
    "description": "Hearty ground beef sandwich in tangy tomato sauce.",
    "rate": 4.8,
    "chefName": "Ree Drummond"
  }
 
]

const chefimg=[
  {
    pic:"https://imgs.search.brave.com/9syVQIQP6YSQIbyCXGw1zHSgV3_0soQ-NLtf9I-vKHw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvNDY0/NTU1OTU4L3N0b2Nr/LXBob3RvLWltYWdl/LWFzaWFuLW1hbGUt/Y2hlZi15ZWxsb3ct/YmFja2dyb3VuZA",
    "name": "Sloppy Joes"

  },
  {
    pic:"https://imgs.search.brave.com/Cqh2xvm5zNLkmTVxwq0ggKb1ZYhIoJJVZldTQr3wKqA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvNTM4/MDMzOS9zdG9jay1w/aG90by10aGUteW91/bmctY29vay1jdXQt/dmVnZXRhYmxlcw",
    "name": "Crash Hot Potatoes"
  },
  {
    pic:"https://imgs.search.brave.com/IAJPaHR1zelYy4wkPiXHYUoavLoM-fYdWVkVlT1hBZI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3J0cmFpdC1z/bWlsaW5nLWNoZWYt/aG9sZGluZy1ib3ds/LXdpcmUtd2hpc2st/Ymx1ZS1iYWNrZ3Jv/dW5kLWNoZWYtbWFr/aW5nLW1lYWxfMTAx/NjcwMC0xMzE2Lmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDA",
    "name": "Pot Roast"
  },
  {
    pic:"https://imgs.search.brave.com/h4wiIbVpsd4tELWxVIrEchRPDVJBwcoDHQwgZnomePI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMzkw/NDYxOTAyL3N0b2Nr/LXBob3RvLWZlbWFs/ZS1hZnJpY2FuLWFt/ZXJpY2FuLWNoZWYt/Y29sb3ItYmFja2dy/b3VuZA",
    "name": "Monkey Bread"
  },
]


  return (
    <div className='mt-10'>

       <h1 className='font-bold text-3xl '>Blog Post</h1>
       <button className='py-3 px-6 rounded-full bg-black text-white mt-4'>All category</button>

       {/* card start */}
     <div className='flex flex-wrap justify-between mt-8'>
      {data.map((elem,idx)=>{
        return <div key={idx} className="card h-80 w-100 bg-amber-100 mr-4 mb-4  rounded-2xl">
         <img className='w-full h-[70%] object-fill rounded-2xl' src={elem.img} alt="" />
      <div className='px-4'>
         <div className='flex justify-between'>
            <h2>{elem.title}</h2>
            <h3>{elem.rate}</h3>
         </div>
         
         <h3>{elem.chefName}</h3>
         
         <h4></h4>
     </div>
      </div>
      })}
      </div>

       {/* card end */}
       
      <h1 className='font-bold mb-10'>Top chefName </h1>
      <div className='flex justify-between flex-wrap gap-5 '>
      {chefimg.map((value,id)=>{
       return <div key={id} className='card h-100 w-80 bg-amber-200 rounded-2xl relative overflow-hidden  '>
        <img 
        className='h-full w-full object-cover'
        src={value.pic}/>

        <div id='bottom' className="h-24 w-60 m-8 bg-white rounded-2xl absolute bottom-0 text-center ">
             <h1>{value.name}</h1>
             <button className='py-2 px-4 rounded-full bg-black text-white mt-2'>Stream Now</button>
        </div>
         
      </div>
      })}
      </div> 
      
      <div className='w-full h-120 mt-10 bg-[url(https://i.pinimg.com/736x/14/01/25/1401256df4d81b17b6d34fb107fb2adb.jpg)] bg-cover flex items-center justify-center'>

         <div>
          <h1 className='text-4xl text-center'>Fresh Insiperation via email</h1>
          <div>
            <input
            className='outline-4 rounded-2xl py-3 px-8 mr-2'
            type="text"
            placeholder='Your email address'
            />

            <button className='py-4 px-4 rounded-full bg-black text-white mt-2'>Subscribe Now</button>


          </div>
         </div> 

      
      </div>

       <footer id='force' className='flex items-center justify-center text-gray-500 mt-10'>
        < div className='relative h-80 w-80  m-2'>
         <h1 className='text-4xl text-black'>Mateam</h1>
         <p className='mt-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 

         </p>
         <h3 className=' absolute bottom-10'>copyright @ 2025 by Abhi</h3>

        </div>
       < div className='flex flex-col gap-2 h-80 w-80 m-2   '>
       <h1 className='text-black'>Pursue</h1>
       <h5>About</h5>
       <h5>Jobs</h5>
       <h5>Press </h5>
       <h5>data protection</h5>
       <h5> Condition</h5>
       <h5> imprint</h5>
       
       </div>

       < div className='flex flex-col gap-2 h-80 w-80  m-2  '>
       <h1 className='text-black'>Useful information </h1>
       <h5>Here's how ot works</h5>
       <h5>Become a creater</h5>
       <h5>FAQ</h5>
       <h5>information and guides</h5>
       <h5>Blog</h5>
       <h5>Contact</h5>
       </div>

       < div className='flex flex-col gap-2 h-80 w-80 m-2  '>
       <h1 className='text-black'>SUPPORT </h1>
       <h5>help center</h5>
       <h5>Terms of service</h5>
       <h5>Privacy policy</h5>
       <h5>Status</h5>
       
       </div>

       < div className='flex flex-col gap-2 h-80 w-80 m-2'>
       <h1 className='text-black'>Cummunity</h1>
       <p>Questuion or feedback?<br />
       we'd love to here from you
       </p>
       <div className="icon">
        <i class="ri-facebook-circle-fill"></i>
        <i class="ri-twitter-line"></i>

       </div>
       
       </div>

       </footer>
     

    </div>
  )
}

export default Cards