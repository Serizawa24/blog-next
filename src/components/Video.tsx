type Props = {
  id: string
}

export default function Video({ id }: Props) {
  return (
      <div style={{
        paddingBottom: `56.25%`,
        position: 'relative',

      }}>
          <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%'
              }}
          />
      </div>
  );
}