import LogoImage from '../../../assets/logo.png';

export const PdfHead = () => {
    return (
        <div className="report-page-head">
            <div className="flex justify-between p-3">
                <div>
                    <img src={LogoImage} alt="" className="w-[200px] h-[80px]" />
                </div>
                <div>
                    <p>Cedar Inspection Ventures</p>
                    <p>West-Tanokrom</p>
                    <p>Takoradi, Ghana</p>
                </div>
            </div>
            <div className="bg-[#D8D8D8] text-center font-bold">
                Inspection Report
            </div>
        </div>
    )
}

export default PdfHead;