import React from 'react';

const DetailList: React.FC = () => {
    return (
        <div className="c-sector-detail__description__right">
            <div className="c-col">
                <ul>
                    <li>Dünyanın en büyük ve en teknolojik entegre tesislerinden biri</li>
                    <li><b>839.428&nbsp;m²</b>’lik üretim alanı</li>
                    <li>Dünyanın <b>ilk 10</b> üreticisinden biri,</li>
                </ul>
            </div>

            <div className="c-col">
                <ul>
                    <li><b>66</b> ülkeye ihracat,</li>
                    <li>Türkiye genelinde <b>1698&nbsp;mağaza</b>, yurtdışında <b>344&nbsp;satış noktası</b>,</li>
                </ul>
            </div>

            <div className="c-col">
                <ul>
                    <li>Tescilli ürün sayısı <strong>4</strong><b>.240</b></li>
                    <li><b>6458</b>&nbsp;Personel</li>
                </ul>
            </div>
        </div>
    );
};

export default DetailList;