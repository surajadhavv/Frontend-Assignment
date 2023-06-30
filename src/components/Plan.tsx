import { useState } from 'react';
// @ts-ignore
import { ReactComponent as PodCastBgImage } from '../assets/podcast.svg';

function Plan({ isActive = false, isMonthlyPlan = true  }: { isActive?: boolean; isMonthlyPlan?: boolean  }) {
	const PlanPrice = isMonthlyPlan ? 54 : 540;
    const PlanPriceText = isMonthlyPlan ? '/month' : '/year';
	return (
		<div
			className={`flex flex-col gap-6 max-w-[303px] border-[0.5px] border-[#7A3199] rounded-[10px] px-7 py-9 ${isActive ? 'bg-[#7A3199] text-white' : 'bg-white'
				}`}
		>
			<div className="flex flex-col gap-4">
				<h6 className="font-bold">{isActive ? 'Premium Plan' : 'Basic Plan'}</h6>
				<p className="text-xs font-['Poppins']">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
			</div>
			<div className={`flex items-center gap-5 ${isActive ? 'text-white' : 'text-[#7A3199]'}`}>
				<span className="text-3xl font-bold">{`$ ${PlanPrice}`}</span>
				<span className="font-[Poppins]">{PlanPriceText}</span>
			</div>
			<ul className="flex flex-col gap-2 text-xs list-['●']">
				<li className="pl-3 font-bold text-sm">Free access to video class</li>
				<li className="pl-3 font-bold text-sm">Free access to video class</li>
				<li className="pl-3 font-bold text-sm">Free access to video class</li>
			</ul>
			<button className="rounded-[5px] border-[0.5px] border-[#7A3199] hover:border-white px-8 py-[14px] w-fit bg-white hover:bg-[#7A3199] text-[#7A3199] hover:text-white text-xs font-[Poppins] transition-colors duration-200">
				Start Free Trial
			</button>
		</div>
	);
}

export default function PricingSection() {
	const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);

	return (
		<section id="plan" className="flex flex-col items-center gap-6 pt-16">
			<PodCastBgImage className="absolute left-0 right-0 -z-10 -translate-y-[4.5rem]" />
			<h2 className="text-3xl font-bold">Choose your plan</h2>
			{/* @ts-ignore */}
			<p className="max-w-[455px] text-center text-sm text-[Poppins]" style={{ textWrap: 'balance' }}>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
			</p>
			<div className="flex gap-[6px] rounded-[10px] p-[6px] text-sm font-[Poppins] bg-white shadow-[0px_10px_30px_0px_rgba(154,148,148,0.25)]">
				<button
					className={`rounded-[10px] px-[9px] py-[3px] ${isMonthlyPlan ? 'bg-[#E1A6FF]/40' : 'bg-white'} transition-colors duration-200`}
					onClick={() => setIsMonthlyPlan(true)}
				>
					monthly
				</button>
				<button
					className={`rounded-[10px] px-[9px] py-[3px] ${!isMonthlyPlan ? 'bg-[#E1A6FF]/40' : 'bg-white'} transition-colors duration-200`}
					onClick={() => setIsMonthlyPlan(false)}
				>
					yearly
				</button>
			</div>
			<ul className="flex justify-between mt-10 w-full">
				<li>
					<Plan isMonthlyPlan={isMonthlyPlan}/>
				</li>
				<li>
					<Plan isActive={true} isMonthlyPlan={isMonthlyPlan}/>
				</li>
				<li>
					<Plan isMonthlyPlan={isMonthlyPlan}/>
				</li>
			</ul>
		</section>
	);
}
