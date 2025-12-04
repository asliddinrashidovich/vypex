function HeaderTop({children}) {
  return (
    <section className="py-2 w-full z-100 bg-white text-center header-top fixed">
        <h5 className="text-gradient font-inter font-bold text-[14px] min-[600px]:text-[20px] leading-[100%]">{children}</h5>
    </section>
  )
}

export default HeaderTop