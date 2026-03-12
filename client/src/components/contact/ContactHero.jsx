import HeroImg from "../../../public/assets/harley-davidson.jpg";

const ContactHero = ({lable , title}) => {
    return (
        <section className="relative h-[420px]">
            <img
                src={HeroImg}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Contact"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
                <p className="text-sm text-white/70 flex items-center gap-3">
                    <span className="hover:text-white transition">Home</span>
                    <span className="text-white/40">/</span>
                    <span className="text-white">{lable}</span>
                </p>
                <h1 className="text-white text-5xl font-extrabold tracking-wide">
                    {title}
                </h1>
            </div>
        </section>
    );
};

export default ContactHero