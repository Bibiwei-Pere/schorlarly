import "./Hero.scss";
import React from "react";
import bg from "../../assets/images/andrea-mininni.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Reveal1, Reveal3 } from "../../animations/Text";
import { PlayCircle } from "lucide-react";
import MuxPlayer from "@mux/mux-player-react";

const HeroPage = () => {
	return (
		<div className="oyoyoHero">
			<section className="oyoyo">
				<div className="hero">
					<Reveal1>
						<h1>Empower Your Academic Journey</h1>
					</Reveal1>
					<Reveal3>
						<p>Elevate Your Achievements with Personalised Assistance and Advanced Tools Tailored for Academic Excellence.</p>
					</Reveal3>
					<div className="flex items-center gap-2">
						<Link href="/auth/signup" target="_blank" rel="noopener noreferrer">
							<Button variant={"outline"} className="max-w-[142px]">
								<PlayCircle className="w-4 mr-2" />
								Demo
							</Button>
						</Link>
						<Link href="/auth/signup" target="_blank" rel="noopener noreferrer">
							<Button className="max-w-[142px]">Sign up</Button>
						</Link>
					</div>

					<div className="video">
						<MuxPlayer
							style={{
								maxWidth: "916px",
								borderRadius: "20px",
								overflow: "hidden",
							}}
							streamType="on-demand"
							playbackId="bWom3bfGjaTJ00YGG7TK3CcFd4lpEyrGXRZbLoiR9Ut4"
							metadataVideoTitle="Setting up a live event"
							primaryColor="#FFFFFF"
							secondaryColor="#000000"
						/>
						{/* <Image src={bg} alt="BACKGROUND" /> */}
					</div>
				</div>
			</section>
		</div>
	);
};

export default HeroPage;
