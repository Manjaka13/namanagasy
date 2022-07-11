import Image from "next/image";
import Link from "next/link";
import React from "react";
import Social from "components/Social";

/*
    Login
*/

const Login = () => {
	return (
		<div className="login f-r-st-st">
			<div className="login__window w-35 h-100">
				<figure className="pd-20 pd-b-10 tx-c">
					<Image
						className="image"
						src="/assets/namanagasy-logo.png"
						alt="Logo Namanagasy"
						width={100}
						height={100}
					/>
				</figure>
				<h1 className="login__title t tx-c fs-230 pd-b-20">Namanagasy</h1>
				<div className="w-30 h-5px br-5 mg-a bg-t b-b"></div>
				<form className="form pd-20 tx-c pd-b-0">
					<input
						className="input tr-200 mg-b-20 br-10 pd-10 pd-l-20 pd-r-20"
						name="email"
						type="email"
						placeholder="Email adress"
						required
					/>
					<input
						className="input tr-200 mg-b-20 br-10 pd-10 pd-l-20 pd-r-20"
						name="password"
						type="password"
						placeholder="Password"
						required
					/>
					<button
						className="submit bg-t white tr-200 pd-10 pd-r-20 pd-l-20 br-10"
						type="submit"
					>
						Submit
					</button>
				</form>
				<p className="reset tx-r fs-90 pd-20">
					Forgot your password ?{" "}
					<Link href="/reset">
						<a className="link fs-90 t tr-200" title="Create new account">
							Reset
						</a>
					</Link>
					.
				</p>
				<p className="no-account tx-r fs-90 pd-20 pd-t-0">
					No account yet ?{" "}
					<Link href="/new">
						<a className="link fs-90 t tr-200" title="Create new account">
							Create one
						</a>
					</Link>
					.
				</p>
				<div className="login__separator mg-a"></div>
				<Social />
			</div>

			<div className="login__representation w-65 h-100">
				<div className="overlay w-100 h-100 o-h f-c-st-st">
					<div className="text-box f-r-st-ce">
						<h2 className="text t fs-450 pd-40">
							Selling dreams and unforgetable moments
						</h2>
					</div>
					<div className="w-100 h-200px f-r-be-en">
						<p className="t pd-20 pd-l-40">© Jonathan Rakotondrazaka</p>
						<figure className="h-100">
							<Image
								src="/assets/chameleon-madagascar.png"
								alt="Chameleon Madagascar"
								width={300}
								height={200}
							/>
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
