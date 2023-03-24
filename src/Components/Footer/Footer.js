import React from 'react'

const Footer = () => {
  return (
    <div className="footer mt-auto py-3 bg-primary text-center ">
    <span className='mx-auto me-5'>
    The Generics
    </span><button type="button" class="btn text-white bg-dark me-2">YouTube
        <i class="fab fa-youtube"></i>
        </button><button type="button" class="btn text-white bg-dark me-2">facebook
        <i class="fab fa-facebook-f"></i>
        </button>
        <button type="button" class="btn text-white bg-dark me-2">Spotify
        <i class="fab fa-facebook-f"></i>
        </button>
</div>
  )
}

export default Footer;