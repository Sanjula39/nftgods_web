'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About NFT" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">NFT</span> stands for Non-Fungible Token, which is a digital asset that represents ownership of a unique item or piece of content. Unlike traditional cryptocurrencies like Bitcoin, which are fungible (meaning one unit of a cryptocurrency can be exchanged for another unit with the same value), NFTs are unique and 
        cannot be exchanged for another NFT with the same value.{' '}
        <span className="font-extrabold text-white">
          NFTs
        </span>{' '}
        are created using{' '}
        <span className="font-extrabold text-white">blockchain technology</span> , which ensures that each NFT is unique and cannot be duplicated. This allows for the creation of digital ownership of unique items 
        such as art, music, videos, and other types of digital content.{' '}
        <span className="font-extrabold text-white">NFTs</span> the madness
        are bought and sold in online marketplaces, and their value is determined by supply and demand, as well as the perceived value of the underlying digital asset. Once an NFT is purchased,
        the buyer owns the unique digital asset that it represents.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
