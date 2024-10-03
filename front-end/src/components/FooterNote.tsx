interface FooterNoteProps {
  className?: string;
}

const FooterNote: React.FC<FooterNoteProps> = ({ className }) => {
  return (
    <div className='flex items-center justify-center'>
      <p className={className === undefined ? "" : className}>
        TrackRev | © {new Date().getFullYear()} Udbhav Balaji
      </p>
    </div>
  );
};

export default FooterNote;
