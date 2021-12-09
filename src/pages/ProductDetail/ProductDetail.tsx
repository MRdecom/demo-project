import React, {useEffect, useState} from 'react';
import {ProductImage} from "./ProductImage";
import {ProductDetails} from "./ProductDetailsBlock";
import {CommentItem, ItemRateInput, TabMenu} from "../../components";
import { useTabs, TabPanel } from "react-headless-tabs"
import CommentInput from "../../components/CommentInput/CommentInput";
import Button from "../../components/Button/Button";
import {ICommentItem} from "../../types/CommentItemType";

const dummyImg = 'https://www.apple.com/v/mac/home/bj/images/meta/mac__bfa414svyuc2_og.png'
const dummyDescription = 'asdnkal ksdn laksdnşl akjsndşlsa ıdnfsopdıhf aoudfhnga odfuhgna ofhngoasıdhjf ' +
    'ıafkhg odfgao ıdfkhjgaği oıdfhgadfıjhg ğiadoıfhjgoıa hjgaoıukfhj gaouıdfkhjg aogaouıdfkhjg aoıpkfjhgh ' +
    'aıpfhg apıkfdhjg apıodfgüpıa hdjfgüıahdfıpghja fgıapdfhjgpaodıjhfgpıüaodjfgğpıkjda fpgıjhadüpfıhjgüadpıofjg ' +
    'üadpıfjhgüpaıdfhjggaouıdfkhjg aoıpkfjhgh aıpfhg apıkfdhjg apıodfgüpıa hdjfgüıahdfıpghja ' +
    'fgıapdfhjgpaodıjhfgpıüaodjfgğpıkjda fpgıjhadüpfıhjgüadpıofjg üadpıfjhgüpaıdfhjggaouıdfkhjg aoıpkfjhgh ' +
    'aıgaouıdfkhjg aoıpkfjhgh aıpfhg apıkfdhjg apıodfgüpıa hdjfgüıahdfıpghja fgıapdfhjgpaodıjhfgpıüaodjfgğpıkjda '


const tabList = ['Details', 'Comments and Rates'];

const ProductDetail = () =>{
    const [selectedTab, setSelectedTab] = useTabs(tabList);
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [newCommentAreaOpen, setNewCommentAreaOpen] = useState(false);
    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    // TODO : propslar bağlanacak.
    // TODO : commentler en yakından uzağa listelensin belki bir filtre konulabilir iyi yorumlar kötüler vs diye

    const tabSelectHandler = (index:number) => {
        setSelectedTab(tabList[index]);
        setActiveTabIndex(index);
    }

    const newCommentButtonHandler = () => {
        setNewCommentAreaOpen(true);
    }

    const createComment = (data: ICommentItem) => {
        // TODO: dataya bu objenin id si eklenecek.
        setNewCommentAreaOpen(false);
    }

    return (
        <div className='product-detail-page'>
            <div>
                <ProductImage src={dummyImg}/>
                <ItemRateInput big rating={3.3} withDigits readonly/>
            </div>

            <div className='product-detail-tab-container'>
                <div>
                    <TabMenu tabList={tabList} onClick={tabSelectHandler} activeTabIndex={activeTabIndex}/>
                </div>
                <TabPanel hidden={selectedTab !== tabList[0]} className='tab-content'>
                    <div>
                        <ProductDetails  arrivalDate={''+ new Date} currency={'$'} description={dummyDescription} name={'Name of this product'} price={123.456}/>
                    </div>
                </TabPanel>
                <TabPanel hidden={selectedTab !== tabList[1]} className='tab-content'>
                    {
                        newCommentAreaOpen ?
                            <CommentInput submitComment={createComment} /> :
                            <Button onClick={newCommentButtonHandler} buttonText={'New comment'}/>

                    }
                    <CommentItem commentDate={''+new Date} rate={2} text={'asdasd'}/>
                    <CommentItem commentDate={''+new Date} rate={2} text={'asdasd'}/>
                    <CommentItem commentDate={''+new Date} rate={2} text={'asdasd'}/>
                    <CommentItem commentDate={''+new Date} rate={2} text={'asdasd'}/>
                </TabPanel>
            </div>
        </div>
    )
}

export default ProductDetail;