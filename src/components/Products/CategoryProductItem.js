
import rolex from '../images/Rolex.jpeg'

const CategoryProductItem = ()=>{
    return <>
     <main className='border border-2  w-[13rem] rounded-md mr-5 mb-5 '>
            <div className='flex item-center place-content-center py-1'>
                <img src={rolex} alt="rolex.png" width='200px'  className='rounded' />
            </div>
            <h4 className='p-1 font-sans font-semibold'>Product title</h4>
            <footer className='bg-[lightgrey] p-1 flex flex-row text-[1rem]'>
               Product Downloads : 4567
            </footer>
        </main>
    </>
}

export default CategoryProductItem;