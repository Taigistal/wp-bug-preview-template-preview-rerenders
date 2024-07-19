import { useBlockProps } from '@wordpress/block-editor';
import { useInstanceId } from '@wordpress/compose';
import { useEffect } from '@wordpress/element';

export default function Edit( { setAttributes, attributes } ) {
	const { uniqueId } = attributes;

	const instanceId = useInstanceId( Edit );

	useEffect( () => {
		console.log( uniqueId, instanceId );

		setAttributes( {
			uniqueId: instanceId,
		} );
	}, [ uniqueId,instanceId ] );

	return <div { ...useBlockProps() }>uniqueId: { uniqueId }</div>;
}
