const Step = (props) => {
return(
<div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-lg border-deep-purple-accent-100 hover:-translate-y-2 hover:shadow-2xl" data-aos="fade-right" data-aos-duration="9000" data-aos-easing="ease-in" data-aos-delay="200">
<div className="flex items-center mb-2">
  <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-blue-400">
    {props.Number}
  </p>
  <p className="text-lg font-bold leading-5">{props.Name}</p>
</div>
<p className="text-sm text-gray-900">
  {props.Exp}
</p>
</div>
);


}

export default Step;