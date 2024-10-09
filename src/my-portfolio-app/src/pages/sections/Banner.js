function Banner() {
    return (
        <div className="flex items-center justify-center text-gray-200 bg-center bg-no-repeat h-80"
            style={{backgroundImage: "url('images/banner.jpg')"}}
        >
            <h1 className="text-6xl text-center text-outline">OGAWA SATORUのポートフォリオサイト</h1>
        </div>
    );
}

export default Banner;