import "../css/Heading.css";
import { useNavigate } from "react-router-dom";

export default function Heading({visible,goToShop,authenticated}){

let history=useNavigate();

return <div className="Heading">
       <div className="Heading_text">
         <h1 style={{visibility:visible ? "visible" : "hidden"}}>Ignite Your Style with Unique Lighters</h1>
        <p>Discover the Coolest Designed Lighters from Around the World and Elevate Your Everyday Moments</p>
        <button onClick={()=>{
            if(authenticated===true){
                history('/Shop')
            }else{
                history('/signup')
            }
        }}>buy now</button>
        </div>
        <div className="photo_grid">
        <img src="https://s3-alpha-sig.figma.com/img/9a08/5e7a/f7ad80c66150b02a80f8ec2cedc02820?Expires=1691971200&Signature=DJKYGDBuEi2t6X6AddNFVA5UGb7lPW-DnPkvZ6nDNluLMDRysBp8EI2l7i5~SqCfl-cw0KOVYXUYfXewEy~q0MjwM5nnox4Qcrw9zu7Hv-GDej5vdmjCFrX2QDPsPkkvA1MHDb9tHjI~l~qrPTYvRhdOjtut0W7nfaUE74bR40txe6RXyKgjMRU2yEY1ULRenG49kBQnS~ZN4-2c0PCOXKov9aWpyp1meHHNjf8ezuMXtfmnsygueo4O08WczE6bn6fpndpXtBGd60ph0Tq9zgG1AIljccWjsPD3obOJxpVV~xA6l8FB1Zbo7DtRPy7WqpaXcnfEU2RuIiDJ9tP8AQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        <img src="https://s3-alpha-sig.figma.com/img/741f/b555/dd316966c544b7dc69d6d9947da847e5?Expires=1691971200&Signature=SPKJVB2ScXQqz5tojaCK~VxwYmWAv5MAKpIqiXxjv-cmSkKw-VK86o0f2Qq30cFgBCeVsHYqz1~UaviGWyye~cP0Q8qo7-rVIvEmsZ479TUc2HDGHY05lGThJ0bNvwJwsPJaKxaXJ545bFr5eNRSicBYq6JblrhNyx8h5-2ML-sAE9qYMZI3Q7ZhCFyhCJ2o3kwLCULe~yhp0WG6W6bx2~jWdGqmpVwbGtHJ7BE9Vp7-jFY2wXV9nuCwmT~KMUe1PMTOKMo68cyAGo483EC6X3OFx9MIlgqDCWSIgigJpqGCC4JKPzN5oX10LsZW4GzO~Khnfv-gp-dsrJmkzH4Khw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        <img src="https://s3-alpha-sig.figma.com/img/ed61/4dd3/6abfc0e154f4857843ee45c11ae7c9b9?Expires=1691971200&Signature=LSi1K8L4iJkox1dAdhQ6HENV5z5B9EtRvwz4ik5G7~1AFE42yzdfSZt9FG4ALls9vouqXBd7cYd-bVjdxJvNt24YQKFZOGO1p82AjS56qUvw7xuRWnhxahJKThV7AjF2Hv7Itb4XsdVr-m1cEFcvR3tWZVGt2GhGOzoBGxqSXPTBPc8t0EqIcW6FlRl1O6ynTXW2lPKBzoE6goJQ6IUVvJ0PaiODRyXLBWbZqLnoy646jz08FURtHcfL5jLjrhC6nSI4RuvEbJaMBpyfE4nzDikLeuZ2GN57y2g1Y386U5N0a8ABFYfAsj7pBfY3Wwld5d1dcztK-L-TLehwFivflw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        <img src="https://s3-alpha-sig.figma.com/img/e3bc/5b79/448d580b0214a52cad07766abca26ff9?Expires=1691971200&Signature=pcTtfFXXnoqxy1QUfLnP2Z9gcQLlhW1DPQTPRQfBNiulMNazmJ8QPtR0I-FhH9q9kxsEXg~ZwYz~URvPxct2GYqy9y-oP4COehtfhS0ZiM26lbJ-Sl5RrZfQQ7LT6yCCDE3xCw7EfpRg8KBFEPWv4IEUIrnt8juNL-7AN4FgPQj72q-MKTzS31tekIw~wJr-uExtRFCe9SMJQVmRno~WPQzh~1p9xq8tcFCqxwdCgJN2JsiaNzFv-Ds3QJQFJGKpfPZboqUyB~zQ3xl71q5L0Ye6nsvihU5iD0bAKjQTtGKUJqK~4D~TO2sXOBu~DEhVKRHl1TKYWKm2~SCNVujItA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
        </div>
    </div>
}