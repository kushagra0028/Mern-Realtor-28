import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem({ listing }) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
          }
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-transform duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-gray-800 hover:text-slate-600'>
            {listing.name}
          </p>
          <div className='flex items-center gap-1 text-gray-600'>
            <MdLocationOn className='h-4 w-4 text-green-700' />
            <p className='text-sm truncate w-full'>{listing.address}</p>
          </div>
          <p className='text-sm text-gray-700 line-clamp-2'>
            {listing.description}
          </p>
          <p className='text-slate-600 mt-2 font-semibold'>
            {listing.offer
              ? `$${listing.discountPrice.toLocaleString('en-US')}${
                  listing.type === 'rent' ? ' / month' : ''
                }`
              : `$${listing.regularPrice.toLocaleString('en-US')}`}
          </p>
          <div className='text-gray-800 flex gap-4'>
            <div className='font-bold text-xs'>
              {`${listing.bedrooms} ${listing.bedrooms > 1 ? 'beds' : 'bed'}`}
            </div>
            <div className='font-bold text-xs'>
              {`${listing.bathrooms} ${
                listing.bathrooms > 1 ? 'baths' : 'bath'
              }`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
