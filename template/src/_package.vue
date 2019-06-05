<script>
export default {
	bind: function(el, binding) {
		<% if (package_type === 'component') { %>
			// this is a component
		<% } else { %>
			// this is a directive
		<% } %>

	}
};
</script>
