import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { contactList } from "helpers/const";
import { IContact } from "helpers/interface";

/*
	Contacts section
*/

const mappedContacts = contactList.map((contact: IContact) => (
	<li className="contacts__item pd-t-20" key={uuidv4()}>
		<Icon icon={contact.icon} /> {contact.content}
	</li>
));

const Contacts: FC = (): JSX.Element => {
	const handleSubmit = () => console.log("Submit message !");

	return (
		<div id="contacts" className="contacts bg-white pd-t-20 pd-b-20">
			<div className="container h-100">
				<div className="contacts__side h-100">
					<h2 className="contacts__title">
						<Icon icon={["fas", "handshake"]} /> Reach us
					</h2>
					<div className="contacts__separator w-20 bg-t mg-t-20 mg-b-20"></div>
					<ul className="contacts__list pd-l-20 pd-b-20 br-5">{mappedContacts}</ul>
				</div>
				<div className="contacts__side h-100">
					<h2 className="contacts__title">
						<Icon icon={["fas", "envelope"]} /> Message us !
					</h2>
					<div className="contacts__separator w-20 bg-t mg-t-20 mg-b-20"></div>
					<form className="contacts__form f-c-st-st" onSubmit={handleSubmit}>
						<input
							className="input tr-200 br-5 mg-b-20 pd-10 pd-l-20 pd-r-20"
							type="email"
							placeholder="Enter your email"
							required
						/>
						<textarea
							className="input tr-200 textarea br-5 mg-b-20 pd-10 pd-l-20 pd-r-20"
							placeholder="Enter your message"
						></textarea>
						<p className="tx-c w-100">
							<button
								className="submit pd-10 pd-l-20 pd-r-20 bg-green white br-5 tr-200 p"
								type="submit"
							>
								<Icon icon={["fas", "envelope"]} /> Send
							</button>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
