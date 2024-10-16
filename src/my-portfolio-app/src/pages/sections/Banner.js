function Banner() {
    return (
        <div className="flex items-center justify-center text-gray-200 bg-center bg-no-repeat h-80"
            style={{backgroundImage: "url('images/banner.jpg')"}}
        >
            <h1 className="text-3xl text-center md:text-6xl text-outline">OGAWA SATORUの<br/>ポートフォリオサイト</h1>
        </div>
    );
}

export default Banner;